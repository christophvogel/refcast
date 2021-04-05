import styles from "./ReferenceList.module.css";
import Link from "next/link";

export type ReferenceProps = {
  refTopic: string;
  timeCode: string;
};

function ReferenceList({ refTopic, timeCode }: ReferenceProps) {
  return (
    <div className={styles.container}>
      <div className={styles.addbtn}>
        <Link href="/add">
          <img src="/addbtn.svg" />
        </Link>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.time}>{timeCode}</div>
        <div
          className={styles.topic}
          onClick={() => {
            window.open(`http://www.google.com/search?q=${refTopic}`, "_blank");
          }}
        >
          {refTopic}
        </div>
      </div>
    </div>
  );
}

export default ReferenceList;
