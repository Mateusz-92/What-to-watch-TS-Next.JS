import { ListData, getMovieByDecade } from "../../../pages/api/api";
import React, { useState } from "react";

// import { MenuData } from "../../common/drop_down_menu/DropDown";

import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";

const MovieYears: React.FC = (props) => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const yearsList: ListData[] = [
    {
      listName: "1910",
    },
    {
      listName: "1920",
    },
    {
      listName: "1930",
    },
    {
      listName: "1940",
    },
    {
      listName: "1950",
    },
    {
      listName: "1960",
    },
    {
      listName: "1970",
    },
    {
      listName: "1980",
    },
    {
      listName: "1990",
    },
    {
      listName: "2000",
    },
  ];

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
        startTitle="Lista"
        data={yearsList}
        onSelectTag={changeTagHandler}
      />
      {/* )} */}
      <MoviesCoverList tag={selectedTag} fetch={getMovieByDecade} />
    </div>
  );
};
export default MovieYears;
