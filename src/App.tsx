import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import TimelinePage from './pages/TimelinePage/TimelinePage';

const AnimatedTimelinePage = lazy(() => import('./pages/AnimatedTimeline/AnimatedTimelinePage'));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/animated" replace />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route
          path="animated"
          element={
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <AnimatedTimelinePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
