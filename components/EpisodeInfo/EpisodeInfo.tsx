import styles from "./EpisodeInfo.module.css";

function EpisodeInfo() {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_title}>Lorem ipsum dolor sit.</div>
      <img className={styles.info_pic} src="/festflausch.jpeg" alt="lorem" />
    </div>
  );
}

export default EpisodeInfo;
