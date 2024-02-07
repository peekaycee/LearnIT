import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

// In React 18, you might use createRoot to render the app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
