import styles from "./AddReference.module.css";

function AddReference() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div>
          <label>
            Timecode
            <input
              className={styles.timecode}
              type="text"
              maxLength={6}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Reference <input className={styles.reference}></input>
          </label>
        </div>
        <button className={styles.add} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddReference;
