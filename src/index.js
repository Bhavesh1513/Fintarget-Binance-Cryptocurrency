// src/index.js
import React from 'react';
import ReactDOM from 'react-dom'; // Use react-dom without '/client' in React 16
import App from './App'; // Importing App from the root src
import './index.css'; // If you have any styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Directly pass the root element here
);
