import { motion, useReducedMotion } from 'framer-motion';
import type { TimelineEvent } from '../../types';
import styles from './EventDetail.module.css';

interface EventDetailProps {
  id: string;
  event: TimelineEvent;
}

export function EventDetail({ id, event }: EventDetailProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={styles.detail}
      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
    >
      <div className={styles.content}>
        <div className={styles.divider} />

        <p className={styles.description}>{event.description}</p>

        {event.imageCredit && (
          <p className={styles.credit}>
            <span className={styles.creditLabel}>Image:</span> {event.imageCredit}
          </p>
        )}
      </div>
    </motion.div>
  );
}
