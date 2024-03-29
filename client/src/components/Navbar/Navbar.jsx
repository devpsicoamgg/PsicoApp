import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import ROUTES from "../../routes/routesHelper";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = useAuth();
  const { photoURL, displayName } = auth.user;
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handelLogOut = () => {
    auth.logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <nav id="test" className={styles.navBar}>
        <Link to={ROUTES.HOME} className={styles.title}>
          <span lang="en" className={styles.logoOne}>
            Psy
          </span>
          <span lang="en" className={styles.logoTwo}>
            App.
          </span>{" "}
          <span></span>
        </Link>

        <div className={styles.menu} onClick={toggleMenu}>
          <span></span>
          <span> </span>
          <span></span>
        </div>

        <ul style={menuOpen ? { display: "flex" } : {}}>
          <li>
            <NavLink
              to={ROUTES.BASIC_DATA_FORM}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              CREAR <br /> USUARIO <span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.CLINICALHISTORY}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              HISTORIA <br /> CLÍNICA <span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.MONITORING}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              SEGUIMIENTO <br /> USUARIO <span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.INFORMS}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              INFORMES <br /> USUARIO<span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.SETTINGS}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              APOYOS <br /> TERAPÉUTICOS<span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.BASIC_DATA_EDITING}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              EDICIÓN <br /> USUARIO <span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.SEGMENTATION}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              SEGMENTACIÓN <br /> CLÍNICA<span></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.VARIOUS}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(255, 255, 255, 0.1)" : "",
                  backdropFilter: isActive ? "blur(5px)" : "none",
                  padding: "12px 12px",
                  borderRadius: "18px",
                  lineHeight: "1.2",
                };
              }}
            >
              AJUSTES <br /> VARIOS <span></span>
            </NavLink>
          </li>

          <div className={styles.imgBtn}>
            <li onClick={handelLogOut}>
              <img
                src={photoURL}
                alt={displayName}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  marginBottom: "8px",
                }}
              />
              <div
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "lighter",
                  marginTop: "-13px",
                }}
              >
                Cerrar sesión
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
