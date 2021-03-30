import Logo from "../components/Logo/Logo";
import SearchEpisode from "../components/SearchEpisode/SearchEpisode";

import styles from "../styles/Home.module.css";

function SearchPage() {
  return (
    <main className={styles.main}>
      <Logo size="small"></Logo>
      <SearchEpisode></SearchEpisode>
    </main>
  );
}

export default SearchPage;
