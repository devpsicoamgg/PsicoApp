import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LogingForm.module.css";
import ROUTES from "../../routes/routesHelper";
import imagen from "../../assets/img/background.png";
import { useAuth } from "../context/authContext";

const LogingForm = () => {
  const auth = useAuth();
  const { displayName } = auth.user;
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.login(emailRegister, passwordRegister);
      console.log("Inicio de sesión exitoso en Login:", response.user);
      console.log("nombre:", displayName);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Error al iniciar sesión en Login:", error.message);
      console.log("Inicio de sesión fallido en :", error.user);
    }
  };

  const handleGoogleLogin = async () => {
    await auth.loginWithGoogle();
    console.log("handleGoogleLoginauth.user");
    if (auth.user) {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <>
      <div className={styles.containerLogingForm}>
        <div className={styles.imageContainer}>
          <img src={imagen} alt="Imagen" className={styles.image} />
        </div>

        <div className={styles.formContainer}>
          <form>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                required
                onChange={(e) => setEmailRegister(e.target.value)}
                type="text"
                id="email"
                name="email"
              />
              <label className={styles.label} htmlFor="firstName">
                Correo
              </label>
            </div>

            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                required
                type="text"
                id="password"
                onChange={(e) => setPasswordRegister(e.target.value)}
                name="password"
              />
              <label className={styles.label} htmlFor="secondName">
                Clave
              </label>
            </div>

            <button
              className={styles.button}
              type="submit"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </form>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className={styles["login-with-google-btn"]}
          >
            Inicia con Google
          </button>
        </div>
      </div>
    </>
  );
};

export default LogingForm;
