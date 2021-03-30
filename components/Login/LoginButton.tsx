import styles from "./LoginButton.module.css";
import { useEffect, useState } from "react";

const scopes = [
  "user-modify-playback-state",
  "user-read-playback-position",
  "user-read-private",
  "user-read-email",
  "streaming",
  "user-read-currently-playing",
];

function LoginButton() {
  const [loginURL, setLoginUrl] = useState<string>(null);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_SPOTIFY_AUTHORIZE_URL}?client_id=${
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    }&redirect_uri=${window.location.origin}/&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
    setLoginUrl(url);
  }, []);

  return (
    <a href={loginURL}>
      <button className={styles.login}>
        <img src="/spotify-icon-cut.svg" className={styles.spotify} />
        <div className={styles.text}>Login with Spotify</div>
      </button>
    </a>
  );
}
export default LoginButton;
