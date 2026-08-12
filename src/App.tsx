import { lazy, Suspense } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import styles from './App.module.css';

const AnimatedTimelinePage = lazy(() => import('./pages/AnimatedTimeline/AnimatedTimelinePage'));
const TimelinePage = lazy(() => import('./pages/TimelinePage/TimelinePage'));

function LoadingPage() {
  return (
    <div
      className={styles.loadingPage}
      role="status"
      aria-live="polite"
    >
      <span>Opening the archive…</span>
    </div>
  );
}

function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <div className={styles.notFoundPanel}>
        <h1>Lost to history</h1>
        <p>The page you requested does not exist in this archive.</p>
        <div className={styles.notFoundActions}>
          <Link className={styles.primaryLink} to="/">
            Enter the animated timeline
          </Link>
          <Link className={styles.secondaryLink} to="/timeline/">
            Browse the full chronology
          </Link>
        </div>
      </div>
    </main>
  );
}

function App() {
  const animatedRouteElement = (
    <Suspense fallback={<LoadingPage />}>
      <AnimatedTimelinePage />
    </Suspense>
  );
  const timelineRouteElement = (
    <Suspense fallback={<LoadingPage />}>
      <TimelinePage />
    </Suspense>
  );

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={animatedRouteElement} />
        <Route path="timeline" element={timelineRouteElement} />
        <Route path="animated" element={animatedRouteElement} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
