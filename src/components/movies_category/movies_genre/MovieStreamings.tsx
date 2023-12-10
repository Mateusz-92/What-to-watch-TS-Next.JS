import { ListData, getVodMovie } from "../../../pages/api/api";
import React, { useState } from "react";

// import { MenuData } from "../../common/drop_down_menu/DropDown";

import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";

const MovieStreamings: React.FC = (props) => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const vodServices: ListData[] = [
    {
      listName: "35",
    },
    {
      listName: "amazon",
    },
    {
      listName: "chili",
    },
    {
      listName: "cineman",
    },
    {
      listName: "hbo",
    },
    {
      listName: "kato",
    },
    {
      listName: "netflix",
    },
    {
      listName: "ninateka",
    },
    {
      listName: "player",
    },
    {
      listName: "tvp",
    },
    {
      listName: "wtf",
    },
  ];

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
      {/* {vodServices?.length && ( */}
      <DropDownMenu
        startTitle="Lista"
        data={vodServices}
        onSelectTag={changeTagHandler}
      />
      {/* )} */}
      <MoviesCoverList tag={selectedTag} fetch={getVodMovie} />
    </div>
  );
};
export default MovieStreamings;
