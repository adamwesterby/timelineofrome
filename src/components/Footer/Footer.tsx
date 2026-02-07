import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Timeline of Rome — A visual journey through 1,229 years of Roman history
        </p>
        <p className={styles.footerCredits}>
          Images sourced from Wikimedia Commons under Creative Commons and Public Domain licenses
        </p>
      </div>
    </footer>
  );
}
