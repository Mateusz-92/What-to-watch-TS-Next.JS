import React, { useState, useEffect } from "react";
import { getMovieByTag } from "../../../pages/api/api";
import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";
import { useGetGenres } from "@/pages/api/queries";
import { BouncingDotsLoader } from "@/components/common/loader/BouncingDotsLoader";

const MovieGenres: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const {
    data: genresData,
    isError: genresError,
    isLoading: genresLoading,
  } = useGetGenres();

  const changeTagHandler = (tag: string) => {
    setSelectedTag(tag);
  };
  if (genresLoading) {
    return <BouncingDotsLoader />;
  }
  if (genresError) {
    return <div>failed fetched genres list</div>;
  }

  return (
    <div>
      <CategoryHeader
        title="Gatunki"
        path="images/genre.png"
        alt="gatunki filmowe"
      />
      <DropDownMenu
        queryData={genresData}
        startTitle={selectedTag || "Gatunek"}
        onSelectTag={changeTagHandler}
      />

      <MoviesCoverList tag={selectedTag} getDataFn={getMovieByTag} />
    </div>
  );
};
export default MovieGenres;
