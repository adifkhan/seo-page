import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left_container}>
        <img src="/images/header-logo.png" alt="light shot logo" style={{ cursor: "pointer" }} />
        <select>
          {languages?.map((lan) => (
            <option key={lan} value={lan}>
              {lan}
            </option>
          ))}
        </select>
        <button>Sign in</button>
      </div>
      <div className={styles.right_container}>
        <div className={styles.social}>
          <span className={styles.twitter_icon}></span>
          <span className={styles.fb_icon}></span>
        </div>
        <div className={styles.btn_wrapper}>
          <div className={styles.download_btn}>
            <span>Download Lightshot for free</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const languages = [
  "English",
  "Spanish",
  "Mandarin",
  "French",
  "German",
  "Hindi",
  "Arabic",
  "Russian",
  "Japanese",
  "Korean",
  "Italian",
  "Dutch",
  "Turkish",
  "Bengali",
  "Swahili",
  "Tamil",
  "Persian",
  "Thai",
];
