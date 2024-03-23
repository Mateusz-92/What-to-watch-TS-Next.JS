import React from "react";
import styles from "./CategoryHeader.module.css";

type CategoryHeaderProps= {
  title: string;
  path: string;
  alt: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, path, alt }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <img src={path} alt={alt} />
    </div>
  );
};

export default CategoryHeader;
