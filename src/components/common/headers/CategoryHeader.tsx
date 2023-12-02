import React from "react";
import styles from "./CategoryHeader.module.css";

const CategoryHeader: React.FC<{ title: string; path: string; alt: string }> = (
  props
) => {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <img src={props.path} alt={props.alt}></img>
    </div>
  );
};

export default CategoryHeader;
