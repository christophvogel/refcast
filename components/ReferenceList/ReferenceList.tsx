import styles from "./ReferenceList.module.css";

import { useRouter } from "next/router";

export type ReferenceProps = {
  refTopic: string;
  timeCode: string;
};

function ReferenceList({ refTopic, timeCode }: ReferenceProps) {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];
  return (
    <div className={styles.container}>
      <div
        className={styles.addbtn}
        onClick={() => {
          router.push(`/add/${id}`);
        }}
      >
        <img src="/addbtn.svg" />
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
