import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './Design/Front.css'; // global CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
