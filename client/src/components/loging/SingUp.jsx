import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SingUp.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ROUTES from "../../routes/routesHelper";
import { useAuth } from "../context/authContext";

const SingUp = ({ onClick }) => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
    onClick();
  };

  return (
    <>
      <div className={styles.containerSingUp}>
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
                  id="password"
                  onChange={(e) => setPasswordRegister(e.target.value)}
                  name="password"
                />
                <label className={styles.label} htmlFor="password">
                  Clave
                </label>
                <span
                  className={styles.eyeIcon}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <button
              className={styles.button}
              type="submit"
              onClick={handleRegister}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingUp;
