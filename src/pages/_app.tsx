import MainProvider from '@shared/utils/main-provider';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}
