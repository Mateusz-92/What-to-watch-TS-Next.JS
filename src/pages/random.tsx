import React from "react";
import { useEffect, useState } from "react";

import MovieDetails from "@/components/movie_details/MovieDetails";

import { MovieData } from "./api/api";
import { fetchRandomMovie } from "./api/api";
const RadnomMovie: React.FC = () => {
  const [movie, setMovie] = useState<MovieData>();

  const fetchRandomMovieHandler = () => {
    fetchRandomMovie().then((data) => {
      setMovie(data);
    });
  };

  useEffect(() => {
    fetchRandomMovieHandler();
  }, []);

  return (
    <div>
      {movie && (
        <>
          <MovieDetails
            title={movie.title}
            alt={movie.title}
            country={movie.country}
            description={movie.description}
            thumbnail={movie.thumbnail}
            year={movie.year}
            genres={movie.genres}
            vod={movie.vod || []}
            key={movie.id}
          />
          {/* bellow will be reusable button  */}
          <button onClick={fetchRandomMovieHandler}>Losuj</button>
        </>
      )}
    </div>
  );
};

export default RadnomMovie;
