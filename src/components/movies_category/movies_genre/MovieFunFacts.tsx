import React from "react";
import { useRouter } from "next/router";
import Button from "@/components/common/buttons/button/Button";
import MovieCover from "@/components/movie_cover/MovieCover";
import MovieDetails from "@/components/movie_details/MovieDetails";
import { useGetRandomFunFact } from "@/pages/api/queries";
import { BouncingDotsLoader } from "@/components/common/loader/BouncingDotsLoader";

const MovieFunFacts: React.FC = () => {
  const router = useRouter();
  const { data: movie, isLoading, refetch, isError } = useGetRandomFunFact();

  const fetchFanFactsHandler = () => {
    refetch();
    console.log("fetch fun");
  };

  const moreNavigatorHandler = (link: string) => {
    router.push(link);
  };

  const movieNavigatorHandler = (id: number) => {
    router.push(`movie/${id}`);
  };

  if (isLoading) {
    return <BouncingDotsLoader />;
  }
  if (isError) {
    return <div>Error fetching facts</div>;
  }
  return (
    <div>
      {movie && (
        <div className="tmp">
          <MovieDetails
            title={movie.title}
            alt={movie.title}
            description={movie.content}
            path={`https://wtwapi.azurewebsites.net${movie.image}`}
            key={movie.id}
          />
          <Button onClick={fetchFanFactsHandler} text="LOSUJ"></Button>
          <Button
            onClick={() => moreNavigatorHandler(movie.link)}
            text="WIĘCEJ"
          ></Button>

          {movie.relatedMovies.map((relatedMovie) => (
            <MovieCover
              key={relatedMovie.id}
              alt={relatedMovie.title}
              path={relatedMovie.thumbnail}
              title={relatedMovie.title}
              year={relatedMovie.year}
              onClick={() => movieNavigatorHandler(relatedMovie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieFunFacts;
