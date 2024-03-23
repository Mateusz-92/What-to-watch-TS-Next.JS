import { ListData, getVodMovie } from "../../../api/api";
import React, { useState } from "react";
import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";
import { vodServices } from "@/constants";

const MovieStreamings: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const changeTagHandler = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <CategoryHeader
        title="Platformy streamingowe"
        path="images/vod.png"
        alt="Platformy streamingowe"
      />

      <DropDownMenu
        startTitle={selectedTag || "Platforma"}
        data={vodServices}
        onSelectTag={changeTagHandler}
      />

      <MoviesCoverList tag={selectedTag} getDataFn={getVodMovie} />
    </div>
  );
};
export default MovieStreamings;
