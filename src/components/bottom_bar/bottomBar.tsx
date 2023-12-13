import React from "react";
import { useState, useEffect } from "react";

import styles from "./bottomBar.module.css";
import { useRouter } from "next/router";
import IconButton from "../common/buttons/icon_btn/IconBtn";

const BottomBar: React.FC = () => {
  const router = useRouter();
  const navigateHandler = (path: string) => {
    router.push(`/${path}`);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.2) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className={isScrolling ? styles.bottom_bar_fixed : styles.bottom_bar}>
      <IconButton
        onNavigate={navigateHandler}
        src="/images/home.png"
        alt="home"
        path=""
      />
      <IconButton
        onNavigate={navigateHandler}
        src="/images/favorite.png"
        alt="our favourite"
        path="ourfavourites"
      />
      <IconButton
        onNavigate={navigateHandler}
        src="/images/funfact.png"
        alt="funny facts"
        path="funny_facts"
      />
      <IconButton
        onNavigate={navigateHandler}
        src="/images/person.png"
        alt="about
        "
        path="about"
      />
    </div>
  );
};

export default BottomBar;
