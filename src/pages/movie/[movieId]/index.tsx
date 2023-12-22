import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MovieDetails from "@/components/movie_details/MovieDetails";
import { getMovieById, getRandomSuggestedMovie } from "../../api/api";
import { MovieData } from "../../api/api";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
const Movie: React.FC = () => {
  const [movie, setMovie] = useState<MovieData>();
  const router = useRouter();

  const movieId = router.query.movieId as string;
  useEffect(() => {
    if (movieId) {
      getMovieById(movieId).then((data) => {
        setMovie(data);
      });
    }
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <MovieDetails
            title={movie.title}
            alt={movie.title}
            country={movie.country}
            description={movie.description}
            path={movie.thumbnail}
            year={movie.year}
            genres={movie.genres}
            vod={movie.vod || []}
            key={movie.id}
          />
          <MoviesCoverList
            fetch={getRandomSuggestedMovie}
            tag={movie.id.toString()}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
