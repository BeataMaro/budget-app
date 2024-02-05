import './_variables.scss';
import { createTheme, colors } from '@mui/material';

export const prefersDarkMode = false;

declare module '@mui/material/styles' {
  interface PaletteColorOptions {
    onPrimary?: string;
    onSecondary?: string;
    main: string;
}
  interface PaletteColor {
    darker?: string;
    primary: PaletteColorOptions;
    onPrimary?: string;
    onSecondary?: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: '#00ddc2',
      onPrimary: '#fff',
    },
    secondary: {
      main: '#3F3D56',
      onSecondary: '#1b1b1b',
    },
    error: {
      main: colors.red.A400,
    },
  },
  typography: {
    fontFamily: ['Catamaran', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 360,
      md: 768,
      lg: 1000,
      xl: 1200,
    },
  },
});
