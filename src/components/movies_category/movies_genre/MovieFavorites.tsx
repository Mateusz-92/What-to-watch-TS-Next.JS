import React from "react";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";
import { getMovieByTag } from "@/pages/api/api";

const MovieFavorite: React.FC = () => {
  return (
    <div>
      <CategoryHeader
        alt="favorite"
        path="/images/recommended2.png"
        title="Polecamy"
      />
      <MoviesCoverList getDataFn={getMovieByTag} tag="fav" />
    </div>
  );
};
export default MovieFavorite;
