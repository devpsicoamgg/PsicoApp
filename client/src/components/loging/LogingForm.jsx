import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LogingForm.module.css";
import ROUTES from "../../routes/routesHelper";

const LogingForm = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate(ROUTES.HOME);
  };

  return (
    <>
      <div className={styles.containerLogingForm}>
        <div className={styles.inputGroup}>
          <input className={styles.input} required type="text" id="firstName" />
          <label className={styles.label} htmlFor="firstName">
            Primer nombre
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            required
            type="text"
            id="secondName"
          />
          <label className={styles.label} htmlFor="secondName">
            Segundo nombre
          </label>
        </div>

        <button className={styles.button} onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </>
  );
};

export default LogingForm;
