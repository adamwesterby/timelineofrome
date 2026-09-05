import { useId, useState } from 'react';
import { trackAnalyticsEvent } from '../../lib/analytics';
import type { TimelineEvent } from '../../types';
import { isoYear } from '../../lib/years';
import { EventDetail } from '../EventDetail/EventDetail';
import styles from './TimelineEvent.module.css';

interface TimelineEventProps {
  event: TimelineEvent;
}

export function TimelineEventComponent({ event }: TimelineEventProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = useId();
  const isMajor = event.significance === 'major';

  const toggle = () => {
    setIsExpanded((previous) => {
      const next = !previous;
      if (next) {
        trackAnalyticsEvent('timeline_event_expand', {
          event_id: event.id,
          event_title: event.title,
          event_era: event.era,
          event_year: event.year,
          event_significance: event.significance,
        });
      }
      return next;
    });
  };

  return (
    <li
      id={`event-${event.id}`}
      className={`${styles.entry} ${isMajor ? styles.major : styles.minor} ${isExpanded ? styles.open : ''}`}
      data-event-year={event.year}
    >
      <p className={styles.year}>
        <time dateTime={isoYear(event.year)}>{event.yearDisplay}</time>
      </p>

      <span className={styles.dot} aria-hidden="true" />

      <div className={styles.body}>
        {isMajor && event.imageUrl && (
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={event.imageUrl}
              alt={event.imageAlt || event.title}
              loading="lazy"
              decoding="async"
              width={640}
              height={360}
            />
          </figure>
        )}

        <h3 className={styles.title}>
          <button
            type="button"
            className={styles.titleButton}
            onClick={toggle}
            aria-expanded={isExpanded}
            aria-controls={detailId}
          >
            {event.title}
          </button>
        </h3>

        <p className={styles.summary}>{event.summary}</p>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggle}
          aria-expanded={isExpanded}
          aria-controls={detailId}
        >
          <span>{isExpanded ? 'Close the account' : 'Read the full account'}</span>
          <svg className={styles.toggleIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M3 5.25 7 9.25l4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <EventDetail id={detailId} event={event} isOpen={isExpanded} />
      </div>
    </li>
  );
}
