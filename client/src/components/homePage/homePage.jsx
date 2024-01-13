import React from "react";
import BACKGROUND_IMG from "../../assets/img/background.png";

import styles from "./homePage.module.css";
import Navbar from "../Navbar/Navbar";

function HomePage() {
  
  return (
    <>
    <div 
    className={styles.parent} 
    style={{ backgroundImage: `url(${BACKGROUND_IMG})`, backgroundPosition: 'center' }}>
      <Navbar />
    </div>
    </>
  );
}

export default HomePage;
