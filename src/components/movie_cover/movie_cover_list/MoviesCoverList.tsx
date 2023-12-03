import React from "react";
import styles from "./MoviesCoverList.module.css";
import { useState, useEffect } from "react";
import MovieCover from "../MovieCover";
import { getMovieByTag } from "@/pages/api/api";

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

  useEffect(() => {
    if (props.tag) {
      props.fetch(props.tag).then((data) => {
        setMovie(data);
      });
    }
  }, [props.tag]);
  return (
    <div className={styles.container}>
      {movie.length > 0 &&
        movie.map((movieCover) => (
          <MovieCover
            key={movieCover.id}
            onClick={() => {}}
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
// import React from "react";
// import styles from "./MoviesCoverList.module.css";

// import MovieCover from "../MovieCover";

// export type MovieCoverData = {
//   id: number;
//   title: string;
//   year: number;
//   thumbnail: string;
// };

// const MoviesCoverList: React.FC<{ movieCoverData: MovieCoverData[] }> = (
//   props
// ) => {
//   return (
//     <div className={styles.container}>
//       {props.movieCoverData &&
//         props.movieCoverData.map((movieCover) => (
//           <MovieCover
//             key={movieCover.id}
//             onClick={() => {}}
//             title={movieCover.title}
//             year={movieCover.year}
//             alt={movieCover.title}
//             path={movieCover.thumbnail}
//           />
//         ))}
//     </div>
//   );
// };

// export default MoviesCoverList;
