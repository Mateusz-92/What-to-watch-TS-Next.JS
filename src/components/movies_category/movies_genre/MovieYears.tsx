import { getMovieByDecade } from "../../../api/api";
import React, { useState } from "react";
import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";
import { yearsList } from "@/constants";

const MovieYears: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const changeTagHandler = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <CategoryHeader
        title="Lata produkcji"
        path="images/clock.png"
        alt="lata produkcji"
      />

      <DropDownMenu
        startTitle={selectedTag || "Dekada"}
        data={yearsList}
        onSelectTag={changeTagHandler}
      />

      <MoviesCoverList tag={selectedTag} getDataFn={getMovieByDecade} />
    </div>
  );
};
export default MovieYears;
