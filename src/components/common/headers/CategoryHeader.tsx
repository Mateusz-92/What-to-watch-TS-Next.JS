import React from "react";
import styles from "./CategoryHeader.module.css";

const CategoryHeader: React.FC<{ title: string; path: string }> = (props) => {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <div>
        <img src={props.path}></img>
      </div>
    </div>
  );
};

export default CategoryHeader;
