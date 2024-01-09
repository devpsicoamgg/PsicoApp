import React from "react";
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
import BACKGROUND_IMG from "../../assets/img/background.png";
import OTHERSHERRA from "../../assets/img/background.png";
import TITLEIMG from "../../assets/img/creacionPcteTitle.png";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div
      className={styles.parent}
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
    >
      <div className={styles.div1}>
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
      </div>

      <div className={styles.div2}>
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
      </div>

      <div className={styles.div3}>
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
      </div>

      <div className={styles.div4}>
        <Link to={ROUTES.INFORMS}>
          <img src={INFORMS} alt="INFORMES" className={styles["img-informs"]} />
          <img
            src={TITLEINFORMS}
            alt="Seguimiento"
            className={styles["title-informs"]}
          />
        </Link>
      </div>

      <div className={styles.div5}>
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
      </div>

      <div className={styles.div6}>
        <Link to={ROUTES.BASIC_DATA_EDITING}>
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
      </div>

      <div className={styles.div6}>
        <Link to={ROUTES.BASIC_DATA_EDITING}>
          <img

            alt="Mensajería por wsp"
            className={styles["img-wsp"]}
          />
          <img

            alt="Mensajería por wsp"
            className={styles["title-wsp"]}
          />
        </Link>
      </div>

      <div className={styles.div8}>
        <Link to={ROUTES.SETTINGS}>
          <img
            src={SETTINGS}
            alt="AJUSTES"
            className={styles["img-settings"]}
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
