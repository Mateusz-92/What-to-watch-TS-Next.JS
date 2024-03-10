import React, { useEffect, useRef, useState } from "react";
import styles from "./Credits.module.css";

type items = {
  type: string;
  name: string;
  contact?: string;
};

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
    name: "React, Next JS, Type Script",
  },
];

const Credits: React.FC = () => {
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
      () => SetIndex((index) => (index + 1) % team.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.container}>
      {team.map((item, i) => (
        <div key={i} style={{ display: index === i ? "block" : "none" }}>
          <span className={styles.type}>{item.type}</span>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.contact}>{item.contact}</span>
        </div>
      ))}
    </div>
  );
};

export default Credits;
