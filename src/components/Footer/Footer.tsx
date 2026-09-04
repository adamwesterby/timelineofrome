import { TIMELINE_END, TIMELINE_START, TIMELINE_SPAN, formatYear } from '../../lib/years';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.range}>
          <span>{formatYear(TIMELINE_START)}</span>
          <span className={styles.rule} aria-hidden="true" />
          <span>{formatYear(TIMELINE_END)}</span>
        </p>
        <p className={styles.line}>
          Timeline of Rome. A visual journey through {TIMELINE_SPAN.toLocaleString('en-US')} years of
          Roman history.
        </p>
        <p className={styles.credits}>
          Images sourced from Wikimedia Commons under Creative Commons and Public Domain licenses.
        </p>
      </div>
    </footer>
  );
}
