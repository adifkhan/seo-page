import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={styles.left_container}>
        <img
          src="https://st.prntscr.com/2023/07/24/0635/img/footer-logo.png"
          alt="lightshot logo"
        />
        <span>Download</span>
        <span>Tutorials</span>
        <span>Privacy</span>
        <span>Help</span>
        <span>Advertise</span>
      </section>
      <section className={styles.right_container}>
        <span>Skillbrains </span>
        <span>&copy; 2009-2022</span>
      </section>
    </footer>
  );
};

export default Footer;
