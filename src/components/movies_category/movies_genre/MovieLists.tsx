import { getMovieByTag } from "../../../pages/api/api";
import React, { useState } from "react";
import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";
import { useGetLists } from "@/pages/api/queries";
import { BouncingDotsLoader } from "@/components/common/loader/BouncingDotsLoader";

const MovieLists: React.FC = (props) => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const {
    data: listsData,
    isError: listsError,
    isLoading: listsLoading,
  } = useGetLists();
  const changeTagHandler = (tag: string) => {
    setSelectedTag(tag);
  };
  if (listsLoading) {
    return <BouncingDotsLoader />;
  }
  if (listsError) {
    return <div>failed fetched lists list</div>;
  }

  return (
    <div>
      <CategoryHeader
        title="Listy Rankingowe"
        path="images/genre.png"
        alt="gatunki filmowe"
      />

      <DropDownMenu
        startTitle={selectedTag || "Lista rankingowa"}
        onSelectTag={changeTagHandler}
        queryData={listsData}
      />

      <MoviesCoverList tag={selectedTag} getDataFn={getMovieByTag} />
    </div>
  );
};
export default MovieLists;
