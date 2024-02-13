import Navbar from "../Navbar/Navbar";
import styles from "./Various.module.css";

const Various = () => {
  return (
    <>
      <Navbar />
      <div className={styles.containerVarious}>
        👋🏽👋🏽👋🏽 Hola, soy el componente llamado Various
      </div>
    </>
  );
};

export default Various;
