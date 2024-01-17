import { NavLink, Link } from "react-router-dom";
import ROUTES from "../../routes/routesHelper";
import APERTURA from "../../assets/img/creacionUser.png";
import CLINICALHISTORY from "../../assets/img/apertura.png";
import MONITORING from "../../assets/img/seguimientos.png";
import TRAKINGIMG from "../../assets/img/hcApetura.png";
import INFORMS from "../../assets/img/informes.png";
import EDITION from "../../assets/img/edicion.png";
import SETTINGS from "../../assets/img/ajustes.png";
import WSP from "../../assets/img/wsp.png";
import VARIOUS from "../../assets/img/various.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <p>
          <Link to={ROUTES.BASIC_DATA_FORM}>
            <img
              src={APERTURA}
              alt="BATOS BÁSICOS"
              className={styles["img-create-user"]}
            />
          </Link>
        </p>

        <p>
          <Link to={ROUTES.CLINICALHISTORY}>
            <img
              src={CLINICALHISTORY}
              alt="HISTORIA CLINICA"
              className={styles["img-clinical-history"]}
            />
          </Link>
        </p>

        <p>
          <Link to={ROUTES.MONITORING}>
            <img
              src={MONITORING}
              alt="INFORMES SEGUIMIENTO"
              className={styles["img-trackings"]}
            />
          <img src={TRAKINGIMG} alt="Seguimiento" className={styles.title} />
          </Link>
        </p>

        <p>
          <Link to={ROUTES.INFORMS}>
            <img
              src={INFORMS}
              alt="INFORMES"
              className={styles["img-informs"]}
            />
          </Link>
        </p>

      </div>
<div>
<p>
        <Link to={ROUTES.SETTINGS}>
          <img
            src={SETTINGS}
            alt="AJUSTES"
            className={styles["img-settings"]}
          />
        </Link>
        </p>

        <p>
        <Link to={ROUTES.BASIC_DATA_EDITING}>
          <img
            src={EDITION}
            alt="EDICIÓN DE DATOS BÁSICOS"
            className={styles["img-editing"]}
          />
        </Link>
        </p>
        

<p> 
        <Link to={ROUTES.SEGMENTATION}>
          <img
            src={WSP}
            alt="Mensajería por wsp"
            className={styles["img-wsp"]}
          />
        </Link>
        </p>

<p> 
        <Link to={ROUTES.VARIOUS}>
          <img src={VARIOUS} alt="Varios 7" className={styles["img-various"]} />
        </Link>
        </p>

      

 </div>

    </>
  );
};

export default Navbar;
