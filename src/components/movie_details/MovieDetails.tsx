import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetails: React.FC<{
  thumbnail: string;
  alt: string;
  year: number;
  title: string;
  genres: string[];
  description: string;
  country: string;
  vod: string[];
}> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img src={props.thumbnail} alt={props.alt}></img>
      </div>
      <div>
        <div>
          <span>{props.year}</span>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.genres}>
          {props.genres?.map((el) => (
            <span key={el}>{el}</span>
          ))}

          <span>{props.country}</span>
        </div>
      </div>
      {props.vod?.length > 0 && (
        <>
          <span>Obejrzysz na:</span>
          <div className={styles.vod_wrapper}>
            {props.vod?.map((item) => (
              <div key={item}>
                <img src={`/images/vod/${item}.png `} alt="vod" />
              </div>
            ))}
          </div>
        </>
      )}
      <div className={styles.description}>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default MovieDetails;
