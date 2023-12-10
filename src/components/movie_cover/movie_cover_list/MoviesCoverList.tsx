import React from "react";
import styles from "./MoviesCoverList.module.css";
import { useState, useEffect, useRef } from "react";
import MovieCover from "../MovieCover";

import { useRouter } from "next/router";

type MovieCoverData = {
  id: number;
  title: string;
  year: number;
  thumbnail: string;
};

const MoviesCoverList: React.FC<{
  fetch: (tag: string) => Promise<MovieCoverData[]>;
  tag: string;
}> = (props) => {
  const [movie, setMovie] = useState<MovieCoverData[]>([]);
  const hasFetchedData = useRef(false);

  const router = useRouter();

  const navigateHandler = (id: number) => {
    const currentPath = router.asPath.toLowerCase();
    const newPath = `/movie/${id}`.toLowerCase();

    if (currentPath !== newPath) {
      router.push(newPath);
    }
  };

  useEffect(() => {
    if (props.tag) {
      if (!hasFetchedData.current) {
        props.fetch(props.tag).then((data) => {
          setMovie(data);
        });
        hasFetchedData.current = true;
        console.log("fetched");
      }
    }
  }, [props.tag]);
  return (
    <div className={styles.container}>
      {movie.length > 0 &&
        movie.map((movieCover) => (
          <MovieCover
            key={movieCover.id}
            onClick={() => navigateHandler(movieCover.id)}
            title={movieCover.title}
            year={movieCover.year}
            alt={movieCover.title}
            path={movieCover.thumbnail}
          />
        ))}
    </div>
  );
};

export default MoviesCoverList;
