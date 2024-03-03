import React from "react";
import styles from "./BouncingDotsLoader.module.css";

export const BouncingDotsLoader = () => {
  return (
    <div className={styles.dotsWrapper}>
      <div className={styles.bouncingLoader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
