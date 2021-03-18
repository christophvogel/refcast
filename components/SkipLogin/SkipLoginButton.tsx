import styles from "./SkipLoginButton.module.css";

function SkipLoginButton() {
  function handleClick() {
    alert("This feature will be available in a later version of the app.");
  }

  return (
    <button onClick={handleClick} className={styles.skip}>
      Skip Login and just Browse
    </button>
  );
}
export default SkipLoginButton;
