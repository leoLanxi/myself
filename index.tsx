import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Resume from './components/Resume';
import Gallery from './components/Gallery';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const Router: React.FC = () => {
  const getRoute = () => {
    const url = new URL(window.location.href);
    const p = url.searchParams.get('p');
    if (p) return '/' + p.replace(/^\//, '');
    const pathname = window.location.pathname;
    const segs = pathname.split('/').filter(Boolean);
    // Normalize GitHub Pages project base: /<repo>/<path> -> /<path>
    if (segs.length > 1) {
      const repo = segs[0];
      const rest = segs.slice(1).join('/');
      return '/' + rest;
    }
    return pathname;
  };
  const [path, setPath] = useState(getRoute());
  useEffect(() => {
    const handler = () => setPath(getRoute());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);
  if (path === '/resume') return <Resume />;
  if (path === '/gallery') return <Gallery />;
  return <App />;
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
