import React from "react";
import { useRouter } from "next/router";
import MovieDetails from "@/components/movie_details/MovieDetails";
import { getRandomSuggestedMovie } from "../../../api/api";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import { BouncingDotsLoader } from "@/components/common/loader/BouncingDotsLoader";
import { useGetMovieById } from "@/api/queries";
const Movie: React.FC = () => {
  const router = useRouter();

  const movieId = router.query.movieId as string;

  const { data: movie, isLoading, isError } = useGetMovieById(movieId);

  if (isLoading) {
    return <BouncingDotsLoader />;
  }
  if (isError) {
    return <div>fetched is failed</div>;
  }

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
            getDataFn={getRandomSuggestedMovie}
            tag={movieId || ""}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
