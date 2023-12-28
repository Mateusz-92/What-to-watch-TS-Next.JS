import React, { useEffect, useState, useRef } from "react";
import MovieDetails from "@/components/movie_details/MovieDetails";
import { FunFact } from "@/pages/api/api";
import { fetchRandomFunFact } from "@/pages/api/api";
import { useRouter } from "next/router";
import Button from "@/components/common/buttons/button/Button";
import MovieCover from "@/components/movie_cover/MovieCover";

const MovieFunFacts: React.FC = () => {
  const [movie, setMovie] = useState<FunFact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetchedData = useRef(false);
  const router = useRouter();

  const fetchFanFactsHandler = () => {
    setIsLoading(true);
    fetchRandomFunFact().then((data) => {
      setMovie(data);
      setIsLoading(false);
      console.log("fetch fun");
    });
  };
  const moreNavigatorHandler = (link: string) => {
    router.push(link);
  };
  const movieNavigatorHandler = (id: number) => {
    router.push(`movie/${id}`);
  };
  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchFanFactsHandler();
      hasFetchedData.current = true;
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        movie && (
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
        )
      )}
    </div>
  );
};

export default MovieFunFacts;
