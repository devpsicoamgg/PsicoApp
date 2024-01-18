import styles from "./LogingForm.module.css";


const LogingForm = () => {
  return (
    <>
      <div className={styles.containerLogingForm}>
       
       <div className={styles.inputGroup}>
      <input className={styles.input} required type={"text"} id={"fistName"} ></input>
      <label className={styles.label} htmlFor={"fistName"}> Primer nombre </label>
       </div>

       <div className={styles.inputGroup}>
      <input className={styles.input} required type={"text"} id={"secondName"}></input>
      <label className={styles.label} htmlFor={"secondName"}> Segundo nombre </label>
       </div>


      </div>
    </>
  );
};

export default LogingForm;