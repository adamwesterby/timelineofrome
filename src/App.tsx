import { Link, Navigate, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import styles from './App.module.css';

function NotFoundPage() {
  return (
    <main className={styles.notFound} id="main-content">
      <div className={styles.notFoundPanel}>
        <h1>Lost to history</h1>
        <p>The page you requested does not exist in this archive.</p>
        <Link className={styles.homeLink} to="/">
          Return to the timeline
        </Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<TimelinePage />} />
      </Route>
      {/* Legacy routes from the two-view era. Both now resolve to the single timeline. */}
      <Route path="timeline" element={<Navigate to="/" replace />} />
      <Route path="animated" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
