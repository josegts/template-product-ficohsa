import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { i18nInit } from '@shared/i18n/config/i18n';
import lightTheme from 'src/styles/theme';
import queryClient from './queryClient';
// import './../styles/index.css';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  i18nInit({ app: 'global', locale: 'es' });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MainProvider;
