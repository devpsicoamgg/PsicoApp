import { NavLink, Link } from "react-router-dom";
import ROUTES from "../../routes/routesHelper";
import APERTURA from "../../assets/img/creacionUser.png";
import HCAPERTURA from "../../assets/img/hcApetura.png";
import CLINICALHISTORY from "../../assets/img/apertura.png";
import MONITORING from "../../assets/img/seguimientos.png";
import TITLETRACKING from "../../assets/img/titleTracking.png";
import INFORMS from "../../assets/img/informes.png";
import TITLEINFORMS from "../../assets/img/titleInforms.png";
import EDITION from "../../assets/img/edicion.png";
import TITLEEDITION from "../../assets/img/editandinact.png";
import SETTINGS from "../../assets/img/ajustes.png";
import WSP from "../../assets/img/wsp.png";
import TITLEWSP from "../../assets/img/segment.png";
import AJUSTES from "../../assets/img/ajsutes.png";
import TITLEIMG from "../../assets/img/creacionPcteTitle.png";
import VARIOUS from "../../assets/img/various.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <span>
          <NavLink to={ROUTES.BASIC_DATA_FORM}>
            <img
              src={APERTURA}
              alt="BATOS BÁSICOS"
              className={styles["img-create-user"]}
            />
            <img
              src={TITLEIMG}
              alt="BATOS BÁSICOS"
              className={styles["title-create-user"]}
            />
          </NavLink>
        </span>

        <span>
          <Link to={ROUTES.CLINICALHISTORY}>
            <img
              src={CLINICALHISTORY}
              alt="HISTORIA CLINICA"
              className={styles["img-clinical-history"]}
            />
            <img
              src={HCAPERTURA}
              alt="APERTURA"
              className={styles["title-clinical-history"]}
            />
          </Link>
        </span>

        <span>
          <Link to={ROUTES.MONITORING}>
            <img
              src={MONITORING}
              alt="INFORMES SEGUIMIENTO"
              className={styles["img-trackings"]}
            />
            <img
              src={TITLETRACKING}
              alt="Seguimiento"
              className={styles["title-trackings"]}
            />
          </Link>
        </span>

        <span>
          <Link to={ROUTES.INFORMS}>
            <img
              src={INFORMS}
              alt="INFORMES"
              className={styles["img-informs"]}
            />
            <img
              src={TITLEINFORMS}
              alt="Seguimiento"
              className={styles["title-informs"]}
            />
          </Link>
        </span>

        <span>
          <Link to={ROUTES.BASIC_DATA_EDITING}>
            <img
              src={EDITION}
              alt="EDICIÓN DE DATOS BÁSICOS"
              className={styles["img-editing"]}
            />
            <img
              src={TITLEEDITION}
              alt="EDICIÓN DE DATOS BÁSICOS"
              className={styles["title-editing"]}
            />
          </Link>
        </span>

        <span>
          <Link to={ROUTES.SEGMENTATION}>
            <img
              src={WSP}
              alt="Mensajería por wsp"
              className={styles["img-wsp"]}
            />
            <img
              src={TITLEWSP}
              alt="Mensajería por wsp"
              className={styles["title-wsp"]}
            />
          </Link>
        </span>

        <span>
          <Link to={ROUTES.VARIOUS}>
            <img
              src={VARIOUS}
              alt="Varios 7"
              className={styles["img-various"]}
            />
            <img className={styles["title-various"]} />
          </Link>
        </span>

        <span>
          <Link to={ROUTES.SETTINGS}>
            <img
              src={SETTINGS}
              alt="AJUSTES"
              className={styles["img-settings"]}
            />
            <img
              src={AJUSTES}
              alt="Mensajería por wsp"
              className={styles["title-settings"]}
            />
          </Link>
        </span>
      </div>
    </>
  );
};

export default Navbar;
