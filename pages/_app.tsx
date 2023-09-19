import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Javier Morales</title>
        <link rel="icon" href="/favicon/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="I'm Javi, a software engineer with a passion for great user experiences."
        ></meta>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
export default MyApp;
