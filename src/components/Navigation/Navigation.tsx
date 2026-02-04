import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ERAS, type EraType } from '../../types';
import styles from './Navigation.module.css';

interface NavigationProps {
  currentEra: EraType | null;
}

export function Navigation({ currentEra }: NavigationProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEra = (eraId: EraType) => {
    const element = document.getElementById(`era-${eraId}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className={styles.container}>
        <span className={styles.label}>Navigate to:</span>
        <div className={styles.buttons}>
          {ERAS.map((era) => (
            <button
              key={era.id}
              className={`${styles.button} ${currentEra === era.id ? styles.active : ''}`}
              onClick={() => scrollToEra(era.id)}
              aria-current={currentEra === era.id ? 'true' : undefined}
            >
              <span className={styles.buttonText}>{era.name}</span>
              <span className={styles.buttonYears}>
                {formatYear(era.startYear)}–{formatYear(era.endYear)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BC`;
  }
  return `${year} AD`;
}
