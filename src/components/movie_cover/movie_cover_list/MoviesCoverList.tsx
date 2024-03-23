import React from "react";
import styles from "./MoviesCoverList.module.css";
import MovieCover from "../MovieCover";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { BouncingDotsLoader } from "@/components/common/loader/BouncingDotsLoader";
import { MovieItem } from "@/api/api";
import { MOVIE } from "@/routes";

const MoviesCoverList: React.FC<{
  fanFuctRelatedMovies?: MovieItem[];
  tag?: string;
  getDataFn?: (x: string) => Promise<MovieItem[]>;
}> = ({ tag = "", getDataFn, fanFuctRelatedMovies }) => {
  const router = useRouter();

  const {
    data: moviesData,
    isError: moviesError,
    isLoading: moviesLoading,
  } = useQuery({
    queryFn: getDataFn ? () => getDataFn(tag) : undefined,
    queryKey: [tag],
    enabled: !!tag && !!getDataFn,
  });

  const navigateHandler = (id: number) => {
    const currentPath = router.asPath.toLowerCase();
    const newPath = `${MOVIE}/${id}`.toLowerCase();

    if (currentPath !== newPath) {
      router.push(newPath);
    }
  };
  if (moviesLoading) {
    return <BouncingDotsLoader />;
  }
  if (moviesError) {
    return <div>fetched is failed</div>;
  }

  return (
    <div className={styles.container}>
      {fanFuctRelatedMovies?.map((movieCover) => (
        <MovieCover
          key={movieCover.id}
          onClick={() => navigateHandler(movieCover.id)}
          title={movieCover.title}
          year={movieCover.year}
          alt={movieCover.title}
          path={movieCover.thumbnail}
        />
      ))}
      {moviesData?.map((movieCover) => (
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
