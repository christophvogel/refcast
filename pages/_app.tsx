import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../components/Login/SpotifyAuth";
import "../styles/globals.css";

const spotify = new SpotifyWebApi();

function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("Username:", user);
      });
    }

    console.log("THE TOKEN IS:", _token);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
