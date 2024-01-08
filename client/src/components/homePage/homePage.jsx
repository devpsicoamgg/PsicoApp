import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ROUTES from '../../routes/routesHelper';
import APERTURA from '../../assets/img/creacionUser.png';
import CLINICALHISTORY from '../../assets/img/apertura.png';
import MONITORING from '../../assets/img/seguimiento.png';
import INFORMS from '../../assets/img/informes.png';
import EDITION from '../../assets/img/edicion.png';
import SETTINGS from '../../assets/img/ajustes.png';
import styles from './homePage.module.css'; 

function HomePage() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <NavLink to={ROUTES.BASIC_DATA_FORM} className={styles['btn-basic-data-form']}>
          <img src={APERTURA} alt="BATOS BASICOS" className={styles['img-basic-data-form']} />
        </NavLink>
      </div>

      <div className={styles.div2}>
        <Link to={ROUTES.CLINICALHISTORY} className={styles['btn-clinical-history']}>
          <img src={CLINICALHISTORY} alt="HISTORIA CLINICA" className={styles['img-clinical-history']} />
        </Link>
      </div>

      <div className={styles.div3}>
        <Link to={ROUTES.MONITORING} className={styles['btn-monitoring']}>
          <img src={MONITORING} alt="SEGUIMIENTO" className={styles['img-monitoring']} />
        </Link>
      </div>

      <div className={styles.div4}>
        <Link to={ROUTES.INFORMS} className={styles['btn-informs']}>
          <img src={INFORMS} alt="INFORMES SEGUIMIENTO" className={styles['img-informs']} />
        </Link>
      </div>

      <div className={styles.div5}>
        <Link to={ROUTES.BASIC_DATA_EDITING} className={styles['btn-editing']}>
          <img src={EDITION} alt="EDICIÓN DE DATOS BÁSICOS" className={styles['img-editing']} />
        </Link>
      </div>

      <div className={styles.div6}>
        <Link to={ROUTES.SETTINGS} className={styles['btn-settings']}>
          <img src={SETTINGS} alt="AJUSTES" className={styles['img-settings']} />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
