import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';

export function Layout() {
  useEffect(() => {
    document.documentElement.dataset.js = 'true';
  }, []);

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main-content">
        Skip to the timeline
      </a>
      <Outlet />
      <Footer />
    </div>
  );
}
