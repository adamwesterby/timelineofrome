import { TIMELINE_END, TIMELINE_START, formatYear } from '../../lib/years';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.field} aria-hidden="true" />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Timeline</span>
          <span className={styles.titleLine}>of Rome</span>
        </h1>

        <p className={styles.range}>
          <span>{formatYear(TIMELINE_START)}</span>
          <span className={styles.rangeRule} aria-hidden="true" />
          <span>{formatYear(TIMELINE_END)}</span>
        </p>

        <p className={styles.tagline}>
          From the founding of the Eternal City to the fall of the Western Empire, every
          major event on one continuous line.
        </p>

        <a className={styles.cue} href="#era-kingdom">
          <span className={styles.cueLine} aria-hidden="true" />
          <span>Begin at the founding</span>
        </a>
      </div>
    </header>
  );
}
