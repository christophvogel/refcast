import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../../components/Logo/Logo";

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
    <main>
      <Logo size="small"></Logo>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>
              Timecode
              <input
                className={styles.timecode}
                type="text"
                maxLength={6}
                value={timecodeValue}
                onChange={(event) => setTimecodeValue(event.target.value)}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Reference
              <input
                className={styles.reference}
                value={referenceName}
                onChange={(event) => setReferenceName(event.target.value)}
              ></input>
            </label>
          </div>
          <button className={styles.add} type="submit">
            ADD
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddPage;
