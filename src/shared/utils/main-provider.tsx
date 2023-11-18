import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { i18nInit } from '@shared/i18n/config/i18n';
import queryClient from './queryClient';
import { TrnComponentsProvider } from '@josegts/ds-components';
// import './../styles/index.css';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  i18nInit({ app: 'global', locale: 'es' });
  return (
    <QueryClientProvider client={queryClient}>
      <TrnComponentsProvider>{children}</TrnComponentsProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MainProvider;
