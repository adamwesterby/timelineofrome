import { AnimatePresence, motion } from 'framer-motion';
import type { AnimatedEvent } from '../data/animatedEvents';
import styles from './SceneOverlay.module.css';

interface SceneOverlayProps {
  event: AnimatedEvent;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export function SceneOverlay({ event, isExpanded, onToggleExpanded }: SceneOverlayProps) {
  const detailsId = `scene-details-${event.id}`;

  return (
    <motion.div
      className={`${styles.overlay} ${isExpanded ? styles.overlayExpanded : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <span className={styles.year}>{event.yearDisplay}</span>
      <h2 className={styles.title}>{event.title}</h2>
      <p className={styles.summary}>{event.summary}</p>
      <button
        type="button"
        className={styles.readMoreButton}
        onClick={onToggleExpanded}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        {isExpanded ? 'Hide details' : 'Read more'}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            id={detailsId}
            className={styles.detailsPanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className={styles.description}>{event.description}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
