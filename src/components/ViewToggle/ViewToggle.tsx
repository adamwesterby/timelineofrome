import { Link, useLocation } from 'react-router-dom';
import styles from './ViewToggle.module.css';

interface ViewToggleProps {
  theme?: 'light' | 'dark';
}

export function ViewToggle({ theme = 'light' }: ViewToggleProps) {
  const location = useLocation();
  const isAnimated = location.pathname === '/animated';

  return (
    <nav
      className={`${styles.viewToggle} ${styles[theme]}`}
      aria-label="View mode"
    >
      <Link
        to="/"
        className={`${styles.toggleOption} ${!isAnimated ? styles.toggleActive : ''}`}
      >
        Timeline
      </Link>
      <Link
        to="/animated"
        className={`${styles.toggleOption} ${isAnimated ? styles.toggleActive : ''}`}
      >
        Animated
      </Link>
    </nav>
  );
}
