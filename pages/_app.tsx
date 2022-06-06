/* eslint-disable react/jsx-props-no-spreading */
import { MobileContextProvider } from "@src/lib/contexts";
import type { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "@src/lib/styles/global.css";

function Metatag() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#FFF" />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content="seoul, tiger, capital" />
      <meta property="og:type" content="website" />
      <meta name="title" content="Seoul Tiger Capital" />
      <meta name="publisher" content="Seoul Tiger Capital" />
      <meta name="author" content="Seoul Tiger Capital" />
      <meta name="twitter:card" content="/assets/ogimg.png" />
      <meta property="og:title" content="Seoul Tiger Capital" />
      <meta property="og:site_name" content="Seoul Tiger Capital" />
      <meta property="og:author" content="Seoul Tiger Capital" />
      <meta property="og:image" content="/assets/ogimg.png" />
      <meta name="description" content="Seoul Tiger Capital" />
      <meta property="og:description" content="Seoul Tiger Capital" />
      <title>Seoul Tiger Capital</title>
    </Head>
  );
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileContextProvider>
      <Metatag />
      <Component {...pageProps} />
    </MobileContextProvider>
  );
}
