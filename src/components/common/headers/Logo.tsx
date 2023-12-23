import React from "react";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo"></img>
        <p>What to watch</p>
      </div>
    </div>
  );
};
export default Logo;
