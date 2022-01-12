import React from "react";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <div>
      <img
        src="assets/header.webp"
        alt="header"
        className={styles.header__img}
      />
      <img
        src="assets/header-mini.webp"
        alt="header"
        className={styles.header__img2}
      />
    </div>
  );
};
