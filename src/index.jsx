import { createRoot } from 'react-dom/client';
import { theme, styles } from './theme.js';
import './app.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline styles={styles} />
  </ThemeProvider>
);
