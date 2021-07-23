import { Fragment } from 'react';
import Head from 'next/head';
import { wrapper } from 'redux/store';
import { Globalstyle } from 'styles/globals';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Globalstyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no"></meta>

        {/* Font */}
        <link rel="stylesheet" type="text/css" href="/fonts.css"></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default wrapper.withRedux(App);
