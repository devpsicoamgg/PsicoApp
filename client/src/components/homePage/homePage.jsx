// components/HomePage.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ROUTES from '../../routes/routesHelper';
import APERTURA from '../../assets/img/creacionUser.png';
import CLINICALHISTORY from '../../assets/img/apertura.png';
import MONITORING from '../../assets/img/seguimiento.png';
import INFORMS from '../../assets/img/informes.png';
import EDITION from '../../assets/img/edicion.png';
import SETTINGS from '../../assets/img/ajustes.png';

function HomePage() {
  return (
    <div className="parent">
      <div className="div1">
        <NavLink to={ROUTES.BASIC_DATA_FORM} className="btn-basic-data-form">
          <img src={APERTURA} alt="BATOS BASICOS" className="img-basic-data-form" />
        </NavLink>
      </div>

      <div className="div2">
        <Link to={ROUTES.CLINICALHISTORY} className="btn-clinical-history">
          <img src={CLINICALHISTORY} alt="HISTORIA CLINICA" className="img-clinical-history" />
        </Link>
      </div>

      <div className="div3">
        <Link to={ROUTES.MONITORING} className="btn-monitoring">
          <img src={MONITORING} alt="SEGUIMIENTO" className="img-monitoring" />
        </Link>
      </div>

      <div className="div4">
        <Link to={ROUTES.INFORMS} className="btn-informs">
          <img src={INFORMS} alt="INFORMES SEGUIMIENTO" className="img-informs" />
        </Link>
      </div>

      <div className="div5">
        <Link to={ROUTES.BASIC_DATA_EDITING} className="btn-editing">
          <img src={EDITION} alt="EDICIÓN DE DATOS BÁSICOS" className="img-editing" />
        </Link>
      </div>

      <div className="div6">
        <Link to={ROUTES.SETTINGS} className="btn-settings">
          <img src={SETTINGS} alt="AJUSTES" className="img-settings" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
