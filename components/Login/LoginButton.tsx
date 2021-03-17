import styles from "./LoginButton.module.css";

function LoginButton() {
  function handleClick(e) {
    e.preventDefault();
    console.log("You will be redirected to spotify.");
  }

  return (
    <button className={`${styles.login}`}>
      <img src="/spotify-icon.svg" className={`${styles.spotify}`} />
      <a href="#" onClick={handleClick}>
        Login with Spotify
      </a>
    </button>
  );
}
export default LoginButton;
