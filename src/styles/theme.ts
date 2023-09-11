import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0058CB',
    },
    secondary: {
      main: '#00BCD8',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default lightTheme;
