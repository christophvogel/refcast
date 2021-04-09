import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../../components/AddReference/AddReference.module.css";

function AddPage() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [timecodeValue, setTimecodeValue] = useState("");
  const [referenceName, setReferenceName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/episode/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: referenceName, timecode: timecodeValue }),
    }).then(() => router.back());
  };

  return (
    <main className={styles.main}>
      <div className={styles.topnav}>
        <img
          className={styles.back}
          src="/back.svg"
          onClick={() => {
            router.push(`/episode/${id}`);
          }}
        />
        <img src="/refcastlogo.png" className={styles.logo} />
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.timelabel}>Timecode</label>
          <input
            required
            className={styles.timecode}
            type="text"
            maxLength={6}
            placeholder="00:00"
            value={timecodeValue}
            onChange={(event) => setTimecodeValue(event.target.value)}
          ></input>

          <label className={styles.reflabel}>Reference</label>
          <input
            required
            placeholder="Add reference here..."
            className={styles.reference}
            value={referenceName}
            onChange={(event) => setReferenceName(event.target.value)}
          ></input>

          <div className={styles.btn}>
            <button className={styles.add} type="submit">
              ADD
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddPage;
