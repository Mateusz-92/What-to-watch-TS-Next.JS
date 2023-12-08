import React, { useEffect, useState, useRef } from "react";
import MovieDetails from "@/components/movie_details/MovieDetails";
import { MovieData } from "@/pages/api/api";
import { fetchRandomMovie } from "@/pages/api/api";

const RandomMovie: React.FC = () => {
  const [movie, setMovie] = useState<MovieData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetchedData = useRef(false);

  const fetchRandomMovieHandler = () => {
    setIsLoading(true);
    fetchRandomMovie().then((data) => {
      setMovie(data);
      setIsLoading(false);
      console.log("fetch");
    });
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchRandomMovieHandler();
      hasFetchedData.current = true;
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        movie && (
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
            <button onClick={fetchRandomMovieHandler}>Losuj</button>
          </>
        )
      )}
    </div>
  );
};

export default RandomMovie;
