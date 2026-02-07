import { motion } from 'framer-motion';
import type { AnimatedEvent } from '../data/animatedEvents';
import styles from './SceneOverlay.module.css';

interface SceneOverlayProps {
  event: AnimatedEvent;
}

export function SceneOverlay({ event }: SceneOverlayProps) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <span className={styles.year}>{event.yearDisplay}</span>
      <h2 className={styles.title}>{event.title}</h2>
      <p className={styles.summary}>{event.summary}</p>
    </motion.div>
  );
}
