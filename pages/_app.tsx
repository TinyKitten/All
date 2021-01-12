import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
