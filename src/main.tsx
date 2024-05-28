import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme.tsx';
import App from './App.tsx';
import StateContextProvider from './contexts/stateContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StateContextProvider>
        <App />
      </StateContextProvider>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
);
