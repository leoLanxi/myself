import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Resume from './components/Resume';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const Router: React.FC = () => {
  const getRoute = () => {
    const url = new URL(window.location.href);
    const p = url.searchParams.get('p');
    return p ? '/' + p.replace(/^\//, '') : window.location.pathname;
  };
  const [path, setPath] = useState(getRoute());
  useEffect(() => {
    const handler = () => setPath(getRoute());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);
  if (path === '/resume') return <Resume />;
  return <App />;
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
