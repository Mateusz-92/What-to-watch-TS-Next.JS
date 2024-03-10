import React, { useState } from "react";
import styles from "./MovieDetails.module.css";
import { emptyImagePath } from "@/constants";

const emptyImage: string = emptyImagePath;

const MovieDetails: React.FC<{
  alt: string;
  year?: number;
  title: string;
  genres?: string[];
  description: string;
  country?: string;
  vod?: string[];
  path: string;
}> = ({ alt, year, title, genres, country, vod, path, description }) => {
  const [imagePath, setImagePath] = useState<string>(path);

  const handleImageError = () => {
    setImagePath(emptyImage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img src={imagePath} alt={alt} onError={handleImageError}></img>
      </div>
      <div className={styles.movie_details}>
        <div>
          <span>{year}</span>
          <h1>{title}</h1>
        </div>
        <div className={styles.genres}>
          {genres?.map((el) => (
            <span key={el}>{el}</span>
          ))}

          <span>{country}</span>
        </div>
      </div>

      {vod && vod?.length > 0 && (
        <div className={styles.movie_details}>
          <span>Obejrzysz na:</span>
          <div className={styles.vod_wrapper}>
            {vod?.map((item) => (
              <div key={item}>
                <img src={`/images/vod/${item}.png `} alt="vod" />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.description}>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default MovieDetails;
