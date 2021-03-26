import type { AppProps } from "next/app";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../components/Login/SpotifyAuth";
import "../styles/globals.css";

const spotify = new SpotifyWebApi();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = "";

    if (token) {
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        console.log("Username:", user);
      });
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
