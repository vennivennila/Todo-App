import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS for the app
import App from './App'; // Main App component

// Create root element for React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
// React.StrictMode helps highlight potential problems in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
