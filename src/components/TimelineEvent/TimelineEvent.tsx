import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { trackAnalyticsEvent } from '../../lib/analytics';
import type { TimelineEvent } from '../../types';
import { EventDetail } from '../EventDetail/EventDetail';
import styles from './TimelineEvent.module.css';

interface TimelineEventProps {
  event: TimelineEvent;
}

export function TimelineEventComponent({ event }: TimelineEventProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMajor = event.significance === 'major';
  const handleToggleExpand = () => {
    setIsExpanded((previouslyExpanded) => {
      const nextExpanded = !previouslyExpanded;
      if (nextExpanded) {
        trackAnalyticsEvent('timeline_event_expand', {
          event_id: event.id,
          event_title: event.title,
          event_era: event.era,
          event_year: event.year,
          event_significance: event.significance,
        });
      }
      return nextExpanded;
    });
  };

  return (
    <article
      id={`event-${event.id}`}
      className={`${styles.event} ${isMajor ? styles.major : styles.minor}`}
    >
      {/* Timeline dot */}
      <div className={styles.dot} aria-hidden="true">
        <span className={styles.dotInner} />
      </div>

      {/* Year badge */}
      <div className={styles.yearBadge}>
        <span className={styles.year}>{event.yearDisplay}</span>
      </div>

      {/* Card */}
      <motion.div
        className={styles.card}
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <button
          className={styles.cardButton}
          onClick={handleToggleExpand}
          aria-expanded={isExpanded}
          aria-controls={`event-detail-${event.id}`}
        >
          {/* Image for major events */}
          {isMajor && event.imageUrl && (
            <div className={styles.imageWrapper}>
              <img
                src={event.imageUrl}
                alt={event.imageAlt || event.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
            </div>
          )}

          <div className={styles.content}>
            <h3 className={styles.title}>
              {event.title}
            </h3>
            <p className={styles.summary}>{event.summary}</p>

            <span className={styles.expandHint}>
              {isExpanded ? 'Hide details' : 'Show details'}
              <ExpandIcon isExpanded={isExpanded} />
            </span>
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <EventDetail
              id={`event-detail-${event.id}`}
              event={event}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </article>
  );
}

function ExpandIcon({ isExpanded }: { isExpanded: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={styles.expandIcon}
      animate={prefersReducedMotion ? undefined : { rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
