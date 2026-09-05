import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { trackAnalyticsEvent } from '../../lib/analytics';
import { ERAS, type EraType } from '../../types';
import { TIMELINE_END, TIMELINE_SPAN, formatYear } from '../../lib/years';
import { YearRoll } from './YearRoll';
import styles from './Navigation.module.css';

interface NavigationProps {
  /** The year the reading line currently sits on. */
  year: number;
}

function eraForYear(year: number): EraType {
  for (let index = ERAS.length - 1; index >= 0; index -= 1) {
    if (year >= ERAS[index].startYear) return ERAS[index].id;
  }
  return ERAS[0].id;
}

/**
 * The ruler. It rides the bottom edge of the opening viewport as a proportional
 * map of the three eras, then pins to the top of the window and becomes the
 * wayfinding bar, filling with gold as the reader scrolls through time.
 */
export function Navigation({ year }: NavigationProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const currentEra = eraForYear(year);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const scrollToEra = (event: MouseEvent<HTMLAnchorElement>, eraId: EraType) => {
    const element = document.getElementById(`era-${eraId}`);
    if (!element) return;

    event.preventDefault();
    trackAnalyticsEvent('timeline_era_navigate', { era_id: eraId });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) * 16;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight;

    window.history.pushState(null, '', `#era-${eraId}`);
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <nav
        className={`${styles.ruler} ${isPinned ? styles.pinned : ''}`}
        aria-label="Eras of Rome"
      >
        <div className={styles.inner}>
          <p className={styles.mark}>Timeline of Rome</p>

          <div className={styles.track}>
            <span className={styles.baseline} aria-hidden="true" />
            <span className={styles.fill} aria-hidden="true" />
            {ERAS.map((era) => {
              const isCurrent = currentEra === era.id;
              return (
                <a
                  key={era.id}
                  className={`${styles.segment} ${isCurrent ? styles.current : ''}`}
                  style={{ flexGrow: (era.endYear - era.startYear) / TIMELINE_SPAN }}
                  href={`#era-${era.id}`}
                  onClick={(event) => scrollToEra(event, era.id)}
                  aria-current={isCurrent ? 'location' : undefined}
                >
                  <span className={styles.tick} aria-hidden="true" />
                  <span className={styles.segmentName}>
                    <span className={styles.segmentArticle}>The </span>
                    {era.name.replace(/^The /, '')}
                  </span>
                  <span className={styles.segmentYear}>{formatYear(era.startYear)}</span>
                </a>
              );
            })}
            <span className={styles.terminus} aria-hidden="true">
              <span className={styles.tick} />
              <span className={styles.segmentYear}>{formatYear(TIMELINE_END)}</span>
            </span>
          </div>

          <p className={styles.readout}>
            <span className={styles.readoutLabel}>Year</span>
            <span className={styles.readoutValue}>
              <YearRoll year={year} />
              <span className="visually-hidden">{formatYear(year)}</span>
            </span>
          </p>
        </div>
      </nav>
    </>
  );
}
