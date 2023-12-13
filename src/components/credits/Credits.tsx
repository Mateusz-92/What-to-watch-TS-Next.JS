import React from "react";
import styles from "./Credits.module.css";
import { useEffect, useRef, useState } from "react";

type items = {
  type: string;
  name: string;
  contact?: string;
};

const Credits: React.FC = () => {
  const team: items[] = [
    {
      type: "Frontend",
      name: "Mateusz Zasada",
      contact: "github.com/mateusz-92",
    },

    {
      type: "Projekt Graficzny",
      name: "Paweł Woźniak",
      contact: "",
    },
    {
      type: "Web Api",
      name: "Marcin Mojski",
      contact: "",
    },
    {
      type: "Code Review ",
      name: "",
      contact: "",
    },

    {
      type: "Kontakt",
      name: "",
      contact: "cobytuobejrzec.app@gmail.com",
    },
    {
      type: "Technologie",
      name: "React, Next JS, Type Script, React Library",
    },
  ];

  const [index, SetIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 2000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => SetIndex((index) => (index + 1) % Object.keys(team).length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [team]);
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.type}>{team[index].type}</span>
        <span className={styles.name}>{team[index].name}</span>
        <span className={styles.contact}>{team[index].contact}</span>
      </div>
    </div>
  );
};

export default Credits;
