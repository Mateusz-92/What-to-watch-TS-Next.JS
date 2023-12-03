import React from "react";
import { useState, useEffect } from "react";

import styles from "./bottomBar.module.css";
import { useRouter } from "next/router";
import Button from "../common/button/Btn";

const BottomBar: React.FC = () => {
  const router = useRouter();
  const navigateHandler = (path: string) => {
    router.push(`/${path}`);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Sprawdź, czy użytkownik przewinął stronę do 200% wysokości ekranu
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
