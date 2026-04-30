import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PricingPage from './PricingPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const params = new URLSearchParams(window.location.search);
const isPricingRoute = window.location.pathname === '/pricing' || params.get('page') === 'pricing';

root.render(
  <React.StrictMode>
    {isPricingRoute ? <PricingPage /> : <App />}
  </React.StrictMode>
);
