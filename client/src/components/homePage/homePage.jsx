import React from "react";
import BACKGROUND_IMG from "../../assets/img/background.png";
import styles from "./homePage.module.css";



function HomePage() {
  
  return (
    <>
    <div 
    className={styles.parent} 
    style={{ backgroundImage: `url(${BACKGROUND_IMG})`, backgroundPosition: 'center' }}>
 
    </div>
    </>
  );
}

export default HomePage;
