import React from "react";
import styles from "./Logo.module.css";
import { useRouter } from "next/router";

const Logo: React.FC = () => {
  const route = useRouter();
  const routeHandler = () => {
    route.push("/");
  };
  return (
    <div>
      <div onClick={() => routeHandler()} className={styles.logo}>
        <img src="/images/logo.png" alt="logo"></img>
        <p>What to watch</p>
      </div>
    </div>
  );
};
export default Logo;
