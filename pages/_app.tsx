/* eslint-disable react/jsx-props-no-spreading */
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
