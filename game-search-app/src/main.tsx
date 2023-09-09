import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameProvider } from './ManageState/GameStateContext.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </GameProvider>
);