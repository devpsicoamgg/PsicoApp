import React from "react";
import BACKGROUND_IMG from "../../assets/img/background.png";
import styles from "./homePage.module.css";
import Navbar from "../Navbar/Navbar";



function HomePage() {
  
  return (
    <>
  <Navbar />
    <div
    className={styles.parent} 
    style={{ backgroundImage: `url(${BACKGROUND_IMG})`, backgroundPosition: 'center' }}>
 
    </div>
    </>
  );
}

export default HomePage;
