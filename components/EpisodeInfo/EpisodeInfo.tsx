import styles from "./EpisodeInfo.module.css";

export type EpisodeProps = {
  episodeName: string;
  imgSrc: string;
};

function EpisodeInfo({ episodeName, imgSrc }: EpisodeProps) {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_title}>{episodeName}</div>
      <img className={styles.info_pic} src={imgSrc} alt={episodeName} />
    </div>
  );
}

export default EpisodeInfo;
