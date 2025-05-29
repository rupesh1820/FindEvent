import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Routing from './Routing.jsx'; // ✔️ relative path sahi

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
