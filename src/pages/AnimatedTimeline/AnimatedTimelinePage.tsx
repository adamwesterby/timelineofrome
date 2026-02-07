import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ANIMATED_EVENTS } from './data/animatedEvents';
import { AnimatedScene } from './components/AnimatedScene';
import { SceneOverlay } from './components/SceneOverlay';
import { ProgressBar } from './components/ProgressBar';
import { PlayPauseButton } from './components/PlayPauseButton';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { useSwipeNavigation } from './hooks/useSwipeNavigation';
import { useAutoPlay } from './hooks/useAutoPlay';
import styles from './AnimatedTimelinePage.module.css';

export default function AnimatedTimelinePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [resetKey, setResetKey] = useState(0);

  const total = ANIMATED_EVENTS.length;
  const currentEvent = ANIMATED_EVENTS[currentIndex];

  // Lock body scroll on mount
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.title = 'Animated Timeline | Timeline of Rome';
    return () => {
      document.body.style.overflow = prev;
      document.title = 'Timeline of Rome (753 BC to 476 AD) | Kingdom, Republic, Empire';
    };
  }, []);

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
    if (currentIndex < total - 1) {
      goTo(currentIndex + 1);
    } else {
      // Wrap to beginning
      setDirection(1);
      setCurrentIndex(0);
      setResetKey((k) => k + 1);
    }
  }, [currentIndex, total, goTo]);

  const onPrev = useCallback(() => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    } else {
      // Wrap to end
      setDirection(-1);
      setCurrentIndex(total - 1);
      setResetKey((k) => k + 1);
    }
  }, [currentIndex, total, goTo]);

  const onTogglePlay = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  useKeyboardNavigation({ onNext, onPrev, onTogglePlay });
  useSwipeNavigation({ onNext, onPrev });
  useAutoPlay({ isPlaying, onNext, resetKey });

  // Reduced motion: disable auto-play when preference changes
  useEffect(() => {
    if (prefersReducedMotion) setIsPlaying(false);
  }, [prefersReducedMotion]);

  return (
    <div className={styles.container}>
      <div className={styles.viewport}>
        <AnimatePresence mode="wait" custom={direction}>
          <AnimatedScene
            key={currentEvent.id}
            event={currentEvent}
            direction={direction}
          />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <SceneOverlay key={`overlay-${currentEvent.id}`} event={currentEvent} />
        </AnimatePresence>
      </div>

      {/* Accessible live region for screen readers */}
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {currentEvent.yearDisplay}: {currentEvent.title} — {currentEvent.summary}
      </div>

      <ProgressBar currentIndex={currentIndex} onNavigate={goTo} />
      <PlayPauseButton isPlaying={isPlaying} onToggle={onTogglePlay} />
    </div>
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
