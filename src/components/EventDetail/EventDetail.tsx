import type { TimelineEvent } from '../../types';
import styles from './EventDetail.module.css';

interface EventDetailProps {
  id: string;
  event: TimelineEvent;
  isOpen: boolean;
}

/**
 * The full account. Always rendered so the open/close motion is a pure CSS
 * grid-row transition: no height measurement, no layout thrash.
 */
export function EventDetail({ id, event, isOpen }: EventDetailProps) {
  return (
    <div id={id} className={styles.detail} data-open={isOpen ? 'true' : 'false'}>
      <div className={styles.clip}>
        <div className={styles.content} aria-hidden={!isOpen} {...(isOpen ? {} : { inert: '' })}>
          <p className={styles.description}>{event.description}</p>
          {event.imageCredit && (
            <p className={styles.credit}>
              <span className={styles.creditLabel}>Image</span> {event.imageCredit}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
