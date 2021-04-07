import AddReference from "../components/AddReference/AddReference";
import Logo from "../components/Logo/Logo";
import styles from "../styles/Home.module.css";

function AddPage() {
  return (
    <main className={styles.main}>
      <Logo size="small"></Logo>
      <AddReference />
    </main>
  );
}

export default AddPage;
