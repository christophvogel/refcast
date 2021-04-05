import styles from "./EpisodeInfo.module.css";
import Link from "next/link";

export type EpisodeProps = {
  episodeName: string;
  imgSrc: string;
};

function EpisodeInfo({ episodeName, imgSrc }: EpisodeProps) {
  return (
    <div className={styles.info_container}>
      <Link href="/search">
        <img className={styles.back} src="/back.svg" />
      </Link>
      <div className={styles.info_title}>{episodeName}</div>
      <img className={styles.info_pic} src={imgSrc} alt={episodeName} />
    </div>
  );
}

export default EpisodeInfo;
