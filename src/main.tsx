import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import { trackSpaPageView } from './lib/analytics';
import './index.css';

const defaultTitle = 'Timeline of Rome (753 BC to 476 AD) | Kingdom, Republic, Empire';

function RouteMetadataTracker() {
  const location = useLocation();

  React.useEffect(() => {
    const isTimeline = location.pathname.startsWith('/timeline');
    const isAnimated = location.pathname === '/' || location.pathname.startsWith('/animated');
    document.title = isTimeline
      ? defaultTitle
      : isAnimated
        ? 'Animated Timeline | Timeline of Rome'
        : 'Page Not Found | Timeline of Rome';

    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    trackSpaPageView(pagePath);
  }, [location.hash, location.pathname, location.search]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteMetadataTracker />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
