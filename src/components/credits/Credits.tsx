import React, { useEffect, useRef, useState } from "react";
import styles from "./Credits.module.css";
import { team } from "@/constants";

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
