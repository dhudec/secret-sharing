import React from 'react';
import { NetworkErrorBoundary } from '@basis-theory/basis-theory-portal-commons/src/components/NetworkErrorBoundary';
import { appWithInstrumentation } from '@basis-theory/basis-theory-portal-commons/src/instrumentation';
import { ThemeProvider } from '@basis-theory/basis-theory-portal-commons/src/theme';
import type { AppProps } from '@basis-theory/basis-theory-portal-commons/src/theme/next';
import { Settings } from 'luxon';
import { Provider as SessionProvider } from 'next-auth/client';
import { appWithTranslation, useTranslation } from 'next-i18next';
import Head from 'next/head';
import { Analytics } from '@/components/shared';
import '../styles/globals.css';
import ErrorPage from './_error';

const MyApp = ({
  Component,
  pageProps,
  emotionCache,
}: AppProps): JSX.Element => {
  const { i18n } = useTranslation();

  Settings.defaultLocale = i18n.language;

  return (
    <NetworkErrorBoundary Component={ErrorPage}>
      <Head>
        <title>{'Basis Theory'}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <ThemeProvider emotionCache={emotionCache}>
        <SessionProvider session={pageProps.session}>
          <Analytics />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </NetworkErrorBoundary>
  );
};

export default appWithInstrumentation(appWithTranslation(MyApp));
