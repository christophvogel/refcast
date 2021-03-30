import type { AppProps } from "next/app";

import { SpotifyProvider } from "../contexts/SpotifyContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpotifyProvider>
      <Component {...pageProps} />
    </SpotifyProvider>
  );
}

export default MyApp;
