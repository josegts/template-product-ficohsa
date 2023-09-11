import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { i18nInit } from '@shared/i18n/config/i18n';
import lightTheme from 'src/styles/theme';
// import './../styles/index.css';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  i18nInit({ app: 'global', locale: 'es' });
  return (
    <ThemeProvider theme={lightTheme}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
