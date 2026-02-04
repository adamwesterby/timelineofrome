import { motion } from 'framer-motion';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <motion.div
          className={styles.laurelLeft}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden="true"
        >
          <LaurelBranch direction="left" />
        </motion.div>

        <div className={styles.titleBlock}>
          <motion.p
            className={styles.preTitle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Visual Journey Through
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Timeline of Rome
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            753 BC — 476 AD
          </motion.p>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From the founding of the Eternal City to the fall of the Western Empire
          </motion.p>
        </div>

        <motion.div
          className={styles.laurelRight}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden="true"
        >
          <LaurelBranch direction="right" />
        </motion.div>
      </div>

      <motion.div
        className={styles.divider}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </header>
  );
}

function LaurelBranch({ direction }: { direction: 'left' | 'right' }) {
  const transform = direction === 'right' ? 'scaleX(-1)' : undefined;

  return (
    <svg
      width="60"
      height="120"
      viewBox="0 0 60 120"
      fill="none"
      style={{ transform }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M30 10 Q20 20, 25 35 Q30 25, 35 15 Q32 12, 30 10" opacity="0.9" />
        <path d="M28 30 Q15 35, 18 52 Q25 42, 32 35 Q30 32, 28 30" opacity="0.85" />
        <path d="M26 50 Q12 52, 14 70 Q22 60, 30 55 Q28 52, 26 50" opacity="0.8" />
        <path d="M25 70 Q10 70, 12 88 Q20 78, 28 74 Q26 72, 25 70" opacity="0.75" />
        <path d="M26 88 Q12 90, 15 105 Q22 96, 30 92 Q28 90, 26 88" />
        <path d="M30 105 Q20 110, 25 120 Q30 115, 35 110 Q32 108, 30 105" opacity="0.7" />
      </g>
    </svg>
  );
}
