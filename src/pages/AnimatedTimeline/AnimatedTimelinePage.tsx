import { lazy, Suspense, useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ANIMATED_EVENTS } from './data/animatedEvents';
import { getSceneAssetSources, hasSceneVersion } from './data/sceneSpecs';
import { AnimatedScene } from './components/AnimatedScene';
import { SceneOverlay } from './components/SceneOverlay';
import { ProgressBar } from './components/ProgressBar';
import { PlayPauseButton } from './components/PlayPauseButton';
import type { SceneQaCheckId, SceneQaChecklist } from './components/SceneQaPanel';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { useSwipeNavigation } from './hooks/useSwipeNavigation';
import { useAutoPlay } from './hooks/useAutoPlay';
import { trackAnalyticsEvent } from '../../lib/analytics';
import type { SceneAssetVersion } from './types/scene';
import styles from './AnimatedTimelinePage.module.css';

const SceneQaPanel = import.meta.env.DEV
  ? lazy(() =>
      import('./components/SceneQaPanel').then((module) => ({ default: module.SceneQaPanel }))
    )
  : null;

const QA_QUERY_FLAG = 'qa';
const QA_VERSION_QUERY = 'sceneVersion';
const QA_EVENT_QUERY = 'event';
const QA_STORAGE_VERSION_KEY = 'timeline.qa.sceneVersion';
const QA_STORAGE_EVENT_KEY = 'timeline.qa.eventId';
const QA_STORAGE_CHECKLIST_KEY = 'timeline.qa.checklist';

function parseSceneVersion(value: string | null): SceneAssetVersion | undefined {
  if (value === 'v1' || value === 'v2' || value === 'v3') return value;
  return undefined;
}

function createEmptyChecklist(): SceneQaChecklist {
  return {
    recognizable: false,
    historicalCue: false,
    textReadable: false,
    depth: false,
    motion: false,
  };
}

export default function AnimatedTimelinePage() {
  const searchParams = new URLSearchParams(window.location.search);
  const isQaMode = import.meta.env.DEV && searchParams.get(QA_QUERY_FLAG) === '1';
  const queryVersion = parseSceneVersion(searchParams.get(QA_VERSION_QUERY));
  const queryEventId = searchParams.get(QA_EVENT_QUERY);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hasStarted, setHasStarted] = useState(() => isQaMode);
  const [isPlaying, setIsPlaying] = useState(() => (isQaMode ? !prefersReducedMotion : false));
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const wasPlayingBeforeDetailsRef = useRef(false);
  const shouldFocusAfterStartRef = useRef(false);
  const sceneViewportRef = useRef<HTMLDivElement>(null);
  const [sceneVersion, setSceneVersion] = useState<SceneAssetVersion>(
    () => (isQaMode ? queryVersion ?? 'v3' : 'v3')
  );
  const [resetKey, setResetKey] = useState(0);
  const [qaChecklistByScene, setQaChecklistByScene] = useState<Record<string, SceneQaChecklist>>(() => {
    if (!isQaMode) return {};
    try {
      const raw = window.localStorage.getItem(QA_STORAGE_CHECKLIST_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as Record<string, SceneQaChecklist>;
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  });

  const total = ANIMATED_EVENTS.length;
  const currentEvent = ANIMATED_EVENTS[currentIndex];
  const qaSceneKey = `${currentEvent.id}:${sceneVersion}`;
  const currentChecklist = qaChecklistByScene[qaSceneKey] ?? createEmptyChecklist();

  // The intro can scroll at small viewport heights and under text zoom. Lock the
  // body only once the full-screen experience is running.
  useEffect(() => {
    if (!hasStarted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || !shouldFocusAfterStartRef.current) return;

    shouldFocusAfterStartRef.current = false;
    const frame = window.requestAnimationFrame(() => sceneViewportRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [hasStarted]);

  useEffect(() => {
    if (!isQaMode) return;

    try {
      if (!queryVersion) {
        const storedVersion = parseSceneVersion(window.localStorage.getItem(QA_STORAGE_VERSION_KEY));
        if (storedVersion) {
          setSceneVersion(storedVersion);
        }
      }

      const initialEventId = queryEventId ?? window.localStorage.getItem(QA_STORAGE_EVENT_KEY);
      if (!initialEventId) return;

      const initialIndex = ANIMATED_EVENTS.findIndex((event) => event.id === initialEventId);
      if (initialIndex >= 0) {
        setCurrentIndex(initialIndex);
      }
    } catch {
      // Ignore storage access failures.
    }
  }, [isQaMode, queryEventId, queryVersion]);

  useEffect(() => {
    if (!isQaMode) return;
    try {
      window.localStorage.setItem(QA_STORAGE_VERSION_KEY, sceneVersion);
    } catch {
      // Ignore storage access failures.
    }
  }, [isQaMode, sceneVersion]);

  useEffect(() => {
    if (!isQaMode) return;
    try {
      window.localStorage.setItem(QA_STORAGE_EVENT_KEY, currentEvent.id);
    } catch {
      // Ignore storage access failures.
    }
  }, [isQaMode, currentEvent.id]);

  useEffect(() => {
    if (!isQaMode) return;
    try {
      window.localStorage.setItem(QA_STORAGE_CHECKLIST_KEY, JSON.stringify(qaChecklistByScene));
    } catch {
      // Ignore storage access failures.
    }
  }, [isQaMode, qaChecklistByScene]);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(total - 1, index));
      if (clamped === currentIndex) return;
      setDirection(clamped > currentIndex ? 1 : -1);
      setCurrentIndex(clamped);
      setResetKey((k) => k + 1);
    },
    [currentIndex, total]
  );

  const onNext = useCallback(() => {
    if (!hasStarted) return;
    if (currentIndex < total - 1) {
      goTo(currentIndex + 1);
    } else {
      // Wrap to beginning
      setDirection(1);
      setCurrentIndex(0);
      setResetKey((k) => k + 1);
    }
  }, [currentIndex, goTo, hasStarted, total]);

  const onPrev = useCallback(() => {
    if (!hasStarted) return;
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    } else {
      // Wrap to end
      setDirection(-1);
      setCurrentIndex(total - 1);
      setResetKey((k) => k + 1);
    }
  }, [currentIndex, goTo, hasStarted, total]);

  const onTogglePlay = useCallback(() => {
    if (!hasStarted) return;
    if (prefersReducedMotion) return;
    if (isDetailsExpanded) return;
    setIsPlaying((playing) => !playing);
  }, [hasStarted, isDetailsExpanded, prefersReducedMotion]);

  const onStartExperience = useCallback(() => {
    trackAnalyticsEvent('animated_experience_start', {
      start_event_id: currentEvent.id,
      start_event_title: currentEvent.title,
    });
    shouldFocusAfterStartRef.current = true;
    setHasStarted(true);
    setIsPlaying(!prefersReducedMotion);
  }, [currentEvent.id, currentEvent.title, prefersReducedMotion]);

  const onToggleExpanded = useCallback(() => {
    if (isDetailsExpanded) {
      setIsDetailsExpanded(false);
      if (wasPlayingBeforeDetailsRef.current) {
        setIsPlaying(true);
      }
      wasPlayingBeforeDetailsRef.current = false;
      return;
    }

    wasPlayingBeforeDetailsRef.current = isPlaying;
    setIsDetailsExpanded(true);
    if (isPlaying) {
      setIsPlaying(false);
    }
  }, [isDetailsExpanded, isPlaying]);

  const onChangeSceneVersion = useCallback((version: SceneAssetVersion) => {
    setSceneVersion(version);
    setResetKey((key) => key + 1);
  }, []);

  const onChecklistChange = useCallback(
    (item: SceneQaCheckId, checked: boolean) => {
      setQaChecklistByScene((previous) => {
        const priorChecklist = previous[qaSceneKey] ?? createEmptyChecklist();
        return {
          ...previous,
          [qaSceneKey]: {
            ...priorChecklist,
            [item]: checked,
          },
        };
      });
    },
    [qaSceneKey]
  );

  useKeyboardNavigation({ onNext, onPrev, onTogglePlay });
  useSwipeNavigation({ onNext, onPrev, enabled: hasStarted && !isDetailsExpanded });
  useAutoPlay({ isPlaying, onNext, resetKey });

  // Reduced motion: disable auto-play when preference changes
  useEffect(() => {
    if (prefersReducedMotion) setIsPlaying(false);
  }, [prefersReducedMotion]);

  // Collapse details when changing events.
  useEffect(() => {
    setIsDetailsExpanded(false);
    wasPlayingBeforeDetailsRef.current = false;
  }, [currentEvent.id]);

  // Warm-cache adjacent scene layers to reduce transition hitching.
  useEffect(() => {
    if (!hasStarted) return;

    const neighbors = [
      currentIndex,
      (currentIndex + 1) % total,
      (currentIndex - 1 + total) % total,
    ];
    const sources = new Set<string>();

    neighbors.forEach((index) => {
      const eventId = ANIMATED_EVENTS[index]?.id;
      if (!eventId) return;
      getSceneAssetSources(eventId, { version: sceneVersion }).forEach((src) => sources.add(src));
    });

    sources.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  }, [currentIndex, hasStarted, sceneVersion, total]);

  return (
    <main
      id="main-content"
      className={styles.container}
      aria-labelledby="animated-page-title"
      style={hasStarted ? undefined : { overflowY: 'auto' }}
    >
      <h1 className="visually-hidden" id="animated-page-title">
        Timeline of Rome: Animated Experience
      </h1>
      {hasStarted ? (
        <>
          <div
            className={styles.viewport}
            ref={sceneViewportRef}
            tabIndex={-1}
            aria-labelledby={`scene-title-${currentEvent.id}`}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <AnimatedScene
                key={`${currentEvent.id}-${sceneVersion}`}
                event={currentEvent}
                direction={direction}
                prefersReducedMotion={prefersReducedMotion}
                sceneVersion={sceneVersion}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <SceneOverlay
                key={`overlay-${currentEvent.id}`}
                event={currentEvent}
                isExpanded={isDetailsExpanded}
                onToggleExpanded={onToggleExpanded}
              />
            </AnimatePresence>
          </div>

          {/* Accessible live region for screen readers */}
          <div className="visually-hidden" aria-live="polite" aria-atomic="true">
            {currentEvent.yearDisplay}: {currentEvent.title} - {currentEvent.summary}
          </div>

          {isQaMode && SceneQaPanel ? (
            <Suspense fallback={null}>
              <SceneQaPanel
                events={ANIMATED_EVENTS}
                currentIndex={currentIndex}
                sceneVersion={sceneVersion}
                hasV2ForCurrentEvent={hasSceneVersion(currentEvent.id, 'v2')}
                hasV3ForCurrentEvent={hasSceneVersion(currentEvent.id, 'v3')}
                isPlaying={isPlaying}
                checklist={currentChecklist}
                onSelectEvent={goTo}
                onSceneVersionChange={onChangeSceneVersion}
                onTogglePlay={onTogglePlay}
                onChecklistChange={onChecklistChange}
              />
            </Suspense>
          ) : null}

          <ProgressBar
            currentIndex={currentIndex}
            onNavigate={goTo}
            isDetailsExpanded={isDetailsExpanded}
          />
          <PlayPauseButton
            isPlaying={isPlaying}
            onToggle={onTogglePlay}
            isDisabled={prefersReducedMotion || isDetailsExpanded}
            disabledLabel={prefersReducedMotion
              ? 'Auto-play unavailable while reduced motion is enabled'
              : 'Close details to resume auto-play'}
          />
        </>
      ) : (
        <section className={styles.intro} aria-labelledby="animated-intro-title">
          <div className={styles.introCard}>
            <p className={styles.introLabel}>Animated Experience</p>
            <h2 className={styles.introTitle} id="animated-intro-title">
              Timeline of Rome
            </h2>
            <p className={styles.introRange}>753 BC to 476 AD</p>
            <p className={styles.introText}>
              Step through Roman history with illustrated scenes that highlight major turning points from the
              city&apos;s founding to the fall of the Western Empire.
            </p>
            <p className={styles.introTextMuted}>
              You can switch to a more detailed timeline view at any time using the toggle above.
            </p>
            <button className={styles.introButton} type="button" onClick={onStartExperience}>
              Continue
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
