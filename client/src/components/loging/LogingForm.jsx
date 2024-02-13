import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LogingForm.module.css";
import ROUTES from "../../routes/routesHelper";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importación corregida
import imagen from "../../assets/img/background.png";
import { useAuth } from "../context/authContext";
import OtroComponente from "./SingUp";

const LogingForm = () => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [mostrarOtroComponente, setMostrarOtroComponente] = useState(false);
  const [buttonText, setButtonText] = useState("Regístrate");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.login(emailRegister, passwordRegister);
      console.log("Inicio de sesión exitoso en Login:", response.user);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Error al iniciar sesión en Login:", error.message);
      console.log("Inicio de sesión fallido en :", error.user);
    }
  };

  const handleGoogleLogin = async () => {
    await auth.loginWithGoogle();
    navigate(ROUTES.HOME);
    console.log("handleGoogleLoginauth.user");
  };

  const toggleMostrarOtroComponente = () => {
    setMostrarOtroComponente(!mostrarOtroComponente);
    setButtonText(mostrarOtroComponente ? "Regístrate" : "Iniciar Sesión");
  };

  return (
    <div className={styles.containerLogingForm}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt="Imagen" className={styles.image} />
      </div>

      <div className={styles.formContainer}>
        <div className={styles.otra}>
        <p
          type="text"
          className={styles.changeBtn}
          onClick={toggleMostrarOtroComponente}
        >
          {buttonText}
        </p>

        {mostrarOtroComponente ? (
          <OtroComponente onClick={toggleMostrarOtroComponente} />
        ) : (
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
              <label className={styles.label} htmlFor="email">
                Correo
              </label>
            </div>

            <div className={styles.inputGroup}>
            <div className={styles.inputContainerPass}> 
              <input
                className={styles.input}
                required
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              
              <label className={styles.label} htmlFor="password">
                Clave
              </label>
              
              <span className={styles.eyeIcon} onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
             </div>
            <button
              className={styles.buttonX}
              type="submit"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
            <>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className={styles["login-with-google-btn"]}
              >
                Inicia con Google
              </button>
            </>
          </form>
        )}
      </div>
      </div>
    </div>
  );
};

export default LogingForm;
