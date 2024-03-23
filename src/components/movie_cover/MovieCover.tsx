import React, { useState } from "react";
import styles from "./MovieCover.module.css";
import { emptyImagePath } from "@/constants";

const MovieCover: React.FC<{
  onClick: () => void;
  path: string;
  alt: string;
  title: string;
  year: number;
}> = ({ path, alt, title, year, onClick }) => {
  const [imagePath, setImagePath] = useState<string>(path);

  const handleImageError = () => {
    setImagePath(emptyImagePath);
  };

  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <img src={imagePath} onError={handleImageError} alt={alt}></img>
        </div>
        <span>{title}</span>
        <span>{year}</span>
      </div>
    </div>
  );
};
export default MovieCover;
