import styles from "./SkipLoginButton.module.css";

function SkipLoginButton() {
  function handleClick(e) {
    e.preventDefault();
    alert("This feature will be available in a later version of the app.");
  }

  return (
    <a href="#" onClick={handleClick}>
      <button className={styles.skip}>Skip Login and just Browse</button>
    </a>
  );
}
export default SkipLoginButton;
