import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import { trackSpaPageView } from './lib/analytics';
import '@fontsource-variable/cinzel';
import '@fontsource-variable/eb-garamond';
import '@fontsource-variable/eb-garamond/wght-italic.css';
import './index.css';

const defaultTitle = 'Timeline of Rome (753 BC to 476 AD) | Kingdom, Republic, Empire';
const knownPaths = new Set(['/', '/timeline', '/timeline/', '/animated', '/animated/']);

function RouteMetadataTracker() {
  const location = useLocation();

  React.useEffect(() => {
    document.title = knownPaths.has(location.pathname)
      ? defaultTitle
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
