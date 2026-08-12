import { motion } from 'framer-motion';
import { ANIMATED_EVENTS, ERA_COLORS } from '../data/animatedEvents';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  currentIndex: number;
  onNavigate: (index: number) => void;
  isDetailsExpanded?: boolean;
}

export function ProgressBar({
  currentIndex,
  onNavigate,
  isDetailsExpanded = false,
}: ProgressBarProps) {
  const total = ANIMATED_EVENTS.length;
  const progress = currentIndex / (total - 1);
  const previousIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  return (
    <nav
      className={`${styles.progressBar} ${isDetailsExpanded ? styles.detailsExpanded : ''}`}
      aria-label="Timeline events"
    >
      <button
        className={styles.stepButton}
        type="button"
        onClick={() => onNavigate(previousIndex)}
        aria-label={`Previous event: ${ANIMATED_EVENTS[previousIndex].title}`}
      >
        <ChevronIcon direction="previous" />
      </button>
      <span className={styles.yearLabel}>{ANIMATED_EVENTS[0].yearDisplay}</span>

      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: 'left' }}
        />
        {ANIMATED_EVENTS.map((event, i) => {
          const position = (i / (total - 1)) * 100;
          const isActive = i === currentIndex;
          const eraColor = ERA_COLORS[event.era];

          return (
            <button
              key={event.id}
              className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
              style={{
                left: `${position}%`,
                backgroundColor: eraColor,
              }}
              onClick={() => onNavigate(i)}
              aria-label={`${event.title} (${event.yearDisplay})`}
              aria-current={isActive ? 'step' : undefined}
            />
          );
        })}
      </div>

      <span className={styles.yearLabel}>{ANIMATED_EVENTS[total - 1].yearDisplay}</span>
      <button
        className={styles.stepButton}
        type="button"
        onClick={() => onNavigate(nextIndex)}
        aria-label={`Next event: ${ANIMATED_EVENTS[nextIndex].title}`}
      >
        <ChevronIcon direction="next" />
      </button>
    </nav>
  );
}

function ChevronIcon({ direction }: { direction: 'previous' | 'next' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path
        d={direction === 'previous' ? 'M12.5 4.5 7 10l5.5 5.5' : 'M7.5 4.5 13 10l-5.5 5.5'}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
