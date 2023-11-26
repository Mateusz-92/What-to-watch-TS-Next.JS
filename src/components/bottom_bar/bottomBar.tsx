import React from "react";
import Button from "../common/button/btn";
import styles from "./bottomBar.module.css";
import { useRouter } from "next/router";

const BottomBar: React.FC = () => {
  const router = useRouter();
  const navigateHandler = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <div className={styles.bottom_bar}>
      <Button
        onNavigate={navigateHandler}
        src="images/home.png"
        alt="home"
        path=""
      />
      <Button
        onNavigate={navigateHandler}
        src="images/favourite.png"
        alt="our favourite"
        path="favourites"
      />
      <Button
        onNavigate={navigateHandler}
        src="images/funfact.png"
        alt="funny facts"
        path="funny_facts"
      />
      <Button
        onNavigate={navigateHandler}
        src="images/person.png"
        alt="about
        "
        path="aobut"
      />
    </div>
  );
};

export default BottomBar;
