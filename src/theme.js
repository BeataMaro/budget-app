import './_variables.scss';
import { createTheme, colors, experimentalStyled, Paper } from '@mui/material';


export const prefersDarkMode = false;

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
      mobile: 320,
      tablet: 768,
      desktop: 1000,
      
    },
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Wrapper = experimentalStyled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  minHeight: '100vh',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.secondary.main,
}));




