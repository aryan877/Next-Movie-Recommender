import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Layout } from '../layout/Appshell';
import { Provider } from 'react-redux';
import store from '../store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../public/styles.css'


export default function App(props) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>CineMatch - Your Ultimate Movie Recommendation Destination</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'dark',
            fontFamily: 'Roboto, sans-serif',
          }}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}