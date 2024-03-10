import React from "react";
import MovieDetails from "@/components/movie_details/MovieDetails";
import Button from "@/components/common/buttons/button/Button";
import { useGetRandomMovie } from "@/pages/api/queries";
import { BouncingDotsLoader } from "@/components/common/loader/BouncingDotsLoader";

const RandomMovie: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetRandomMovie();

  const fetchRandomMovieHandler = () => {
    refetch();
  };
  if (isLoading) {
    return <BouncingDotsLoader />;
  }
  if (isError) {
    return <div>fetched is failed</div>;
  }
  return (
    <div>
      {data && (
        <div className="tmp">
          <MovieDetails
            title={data.title}
            alt={data.title}
            country={data.country}
            description={data.description}
            path={data.thumbnail}
            year={data.year}
            genres={data.genres}
            vod={data.vod || []}
            key={data.id}
          />
          <Button onClick={fetchRandomMovieHandler} text="LOSUJ"></Button>
        </div>
      )}
    </div>
  );
};

export default RandomMovie;

