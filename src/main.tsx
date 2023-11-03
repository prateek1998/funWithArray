import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ManagedUIContext } from './contexts/ui.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ManagedUIContext>
      <App />
    </ManagedUIContext>
  // </React.StrictMode>
);
