import React from "react";
import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="/assets/footer.webp"
        alt="footer"
        className={styles.footer__img}
      />
    </footer>
  );
};
