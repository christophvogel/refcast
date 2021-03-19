import styles from "./SearchEpisode.module.css";

function SearchEpisode() {
  return (
    <div className={styles.container}>
      <button className={styles.searchbtn}>
        <img src="/search.svg" className={styles.searchicon} />
      </button>
      <input className={styles.input} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchEpisode;
