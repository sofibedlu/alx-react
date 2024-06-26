import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// New root for Notifications component
const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));
notificationsRoot.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
)

reportWebVitals();
