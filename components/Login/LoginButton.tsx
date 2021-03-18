import styles from "./LoginButton.module.css";

function LoginButton() {
  function handleClick(e) {
    e.preventDefault();
    console.log("You will be redirected to spotify.");
  }

  return (
    <a href="#" onClick={handleClick}>
      <button className={styles.login}>
        <img src="/spotify-icon.svg" className={styles.spotify} />
        <div className={styles.text}>Login with Spotify</div>
      </button>
    </a>
  );
}
export default LoginButton;
