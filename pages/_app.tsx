import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Interceptor from '../services/interceptor';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  
  return (
    <Interceptor
      component={(
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      )}
    />
  );
}

export default MyApp
