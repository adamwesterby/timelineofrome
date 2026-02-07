import { motion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';
import type { AnimatedEvent } from '../data/animatedEvents';
import type { SingleImageSceneSpec } from '../types/scene';
import styles from './SingleImageScene.module.css';

interface SingleImageSceneProps {
  event: AnimatedEvent;
  spec: SingleImageSceneSpec;
  fallback: ReactNode;
  prefersReducedMotion: boolean;
}

const gradeClassNames = {
  battle: styles.gradeBattle,
  ceremony: styles.gradeCeremony,
  collapse: styles.gradeCollapse,
  map: styles.gradeMap,
} as const;

export function SingleImageScene({
  event,
  spec,
  fallback,
  prefersReducedMotion,
}: SingleImageSceneProps) {
  const [hasAssetError, setHasAssetError] = useState(false);

  useEffect(() => {
    setHasAssetError(false);
  }, [event.id, spec.src]);

  if (hasAssetError || !spec.src) {
    return <div className={styles.fallback}>{fallback}</div>;
  }

  const gradeClassName = spec.grade ? gradeClassNames[spec.grade] : styles.gradeBattle;

  return (
    <div className={styles.root} aria-label={`${event.title} single image scene`} role="img">
      <motion.div
        className={styles.camera}
        animate={
          prefersReducedMotion
            ? { x: 0, y: 0, scale: 1 }
            : {
                x: [0, spec.camera.driftX * 0.45, 0],
                y: [0, spec.camera.driftY * 0.45, 0],
                scale: [spec.camera.zoomFrom, spec.camera.zoomTo, spec.camera.zoomFrom],
              }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.2 }
            : {
                duration: 20,
                ease: 'easeInOut',
                repeat: Infinity,
              }
        }
      >
        <motion.img
          src={spec.src}
          alt=""
          aria-hidden="true"
          className={`${styles.image} ${gradeClassName}`}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1, x: 0, y: 0 }
              : {
                  opacity: 1,
                  x: [0, spec.camera.driftX * 0.8, 0],
                  y: [0, spec.camera.driftY * 0.8, 0],
                  scale: [1, 1.02, 1],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.2 }
              : {
                  duration: 18,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  opacity: { duration: 0.5, repeat: 0 },
                }
          }
          onError={() => setHasAssetError(true)}
          decoding="async"
          loading="eager"
          draggable={false}
        />
      </motion.div>

      <div className={styles.atmosphere} />
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}
