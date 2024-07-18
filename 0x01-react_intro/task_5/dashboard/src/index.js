import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

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
);