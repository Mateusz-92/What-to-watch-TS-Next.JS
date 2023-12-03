import {
  ListData,
  MovieItem,
  getLists,
  getMovieByTag,
} from "../../../pages/api/api";
import React, { useState, useEffect } from "react";

import { MenuData } from "../../common/drop_down_menu/DropDown";
import styles from "./MovieGenres.module.css";

import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";

const MovieLists: React.FC = (props) => {
  const [list, setList] = useState<ListData[]>();
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    getLists().then((data) => {
      setList(data);
    });
  }, []);
  const changeTagHandler = (tag: string) => {
    setSelectedTag(tag);
  };
  return (
    <div>
      <CategoryHeader
        title="Listy Rankingowe"
        path="images/genre.png"
        alt="gatunki filmowe"
      />
      {list?.length && (
        <DropDownMenu
          startTitle="Lista"
          data={list}
          onSelectTag={changeTagHandler}
        />
      )}
      <MoviesCoverList tag={selectedTag} fetch={getMovieByTag} />
    </div>
  );
};
export default MovieLists;
