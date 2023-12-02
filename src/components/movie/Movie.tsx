import React, { useState } from "react";
import styles from "./Movie.module.css";

const Movie: React.FC<{
  onClick: () => void;
  path: string;
  alt: string;
  title: string;
}> = (props) => {
  const [imagePath, setImagePath] = useState<string>(props.path);
  const emptyImage: string = "images/empty_image.png";

  const handleImageError = () => {
    setImagePath(emptyImage);
  };

  return (
    <div onClick={props.onClick} className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <img src={imagePath} onError={handleImageError} alt={props.alt}></img>
        </div>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
export default Movie;
