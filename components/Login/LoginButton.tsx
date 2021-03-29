import styles from "./LoginButton.module.css";
import { loginURL } from "../../contexts/SpotifyAuth";

function LoginButton() {
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
