import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "~/styles";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ego Lounge</title>
        <meta name='description' content='Ego Lounge Competitions' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
