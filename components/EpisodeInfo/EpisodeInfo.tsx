import styles from "./EpisodeInfo.module.css";
import { useRouter } from "next/router";

export type EpisodeProps = {
  episodeName: string;
  imgSrc: string;
};

function EpisodeInfo({ episodeName, imgSrc }: EpisodeProps) {
  const router = useRouter();
  return (
    <div className={styles.info_container}>
      <img
        className={styles.back}
        onClick={() => {
          router.push(`/search`);
        }}
        src="/back.svg"
      />
      <div className={styles.info_title}>{episodeName}</div>
      <img className={styles.info_pic} src={imgSrc} alt={episodeName} />
    </div>
  );
}

export default EpisodeInfo;
