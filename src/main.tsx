import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add scroll blur effect
window.addEventListener('scroll', () => {
  document.documentElement.dataset.scroll = window.scrollY > 50 ? 'true' : 'false';
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);