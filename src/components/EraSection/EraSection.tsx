import type { Era, TimelineEvent } from '../../types';
import { eraDuration, formatYear, isoYear } from '../../lib/years';
import { TimelineEventComponent } from '../TimelineEvent/TimelineEvent';
import styles from './EraSection.module.css';

interface EraSectionProps {
  era: Era;
  events: TimelineEvent[];
}

export function EraSection({ era, events }: EraSectionProps) {
  const years = eraDuration(era.startYear, era.endYear);

  return (
    <section id={`era-${era.id}`} className={styles.section} aria-labelledby={`era-${era.id}-title`}>
      <div className={styles.ledger} data-ledger>
        <div className={styles.spine} aria-hidden="true">
          <span className={styles.spineFill} />
        </div>

        <header className={styles.head} data-event-year={era.startYear} data-reveal>
          <p className={styles.headYear}>
            <time dateTime={isoYear(era.startYear)}>{formatYear(era.startYear)}</time>
          </p>
          <span className={styles.headMarker} aria-hidden="true" />
          <div className={styles.headBody}>
            <h2 className={styles.title} id={`era-${era.id}-title`}>
              <span className={styles.titleInk}>{era.name}</span>
            </h2>
            <p className={styles.facts}>
              <span className={styles.fact}>
                {formatYear(era.startYear)} – {formatYear(era.endYear)}
              </span>
              <span className={styles.fact}>
                <span className={styles.factsSeparator} aria-hidden="true" />
                {years} years
              </span>
              <span className={styles.fact}>
                <span className={styles.factsSeparator} aria-hidden="true" />
                {events.length} events
              </span>
            </p>
            <p className={styles.description}>{era.description}</p>
          </div>
        </header>

        <ol className={styles.entries}>
          {events.map((event) => (
            <TimelineEventComponent key={event.id} event={event} />
          ))}
        </ol>
      </div>
    </section>
  );
}
