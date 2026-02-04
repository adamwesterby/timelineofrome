import { motion } from 'framer-motion';
import type { Era, TimelineEvent } from '../../types';
import { TimelineEventComponent } from '../TimelineEvent/TimelineEvent';
import styles from './EraSection.module.css';

interface EraSectionProps {
  era: Era;
  events: TimelineEvent[];
}

export function EraSection({ era, events }: EraSectionProps) {
  return (
    <section id={`era-${era.id}`} className={`${styles.section} ${styles[era.id]}`}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.headerDecoration} aria-hidden="true">
          <span className={styles.decorLine} />
          <EraIcon era={era.id} />
          <span className={styles.decorLine} />
        </div>

        <h2 className={styles.title}>{era.name}</h2>

        <p className={styles.years}>
          {formatYear(era.startYear)} — {formatYear(era.endYear)}
        </p>

        <p className={styles.description}>{era.description}</p>
      </motion.header>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} aria-hidden="true" />

        <div className={styles.events}>
          {events.map((event, index) => (
            <TimelineEventComponent
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EraIcon({ era }: { era: string }) {
  switch (era) {
    case 'kingdom':
      return (
        <svg className={styles.icon} viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 5 L25 15 H35 L27 22 L30 35 L20 28 L10 35 L13 22 L5 15 H15 Z" />
        </svg>
      );
    case 'republic':
      return (
        <svg className={styles.icon} viewBox="0 0 40 40" fill="currentColor">
          <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontFamily="serif" fontWeight="bold">
            SPQR
          </text>
        </svg>
      );
    case 'empire':
      return (
        <svg className={styles.icon} viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 2 L23 12 H33 L25 18 L28 28 L20 22 L12 28 L15 18 L7 12 H17 Z" />
          <circle cx="20" cy="32" r="5" />
        </svg>
      );
    default:
      return null;
  }
}

function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BC`;
  }
  return `${year} AD`;
}
