import React, { useState, useEffect } from "react";
import { getGenres, getMovieByTag } from "../../../pages/api/api";
import { ListData } from "../../../pages/api/api";
import styles from "./MovieGenres.module.css";

import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import MoviesCoverList from "@/components/movie_cover/movie_cover_list/MoviesCoverList";
import CategoryHeader from "@/components/common/headers/CategoryHeader";

const movies = [
  {
    id: 1073,
    title: "Ziemia obiecana ",
    year: 1974,
    thumbnail: "https://fwcdn.pl/fpo/10/73/1073/7998093.3.jpg",
  },
  {
    id: 1158,
    title: "Krótki film o miłości ",
    year: 1988,
    thumbnail: "https://fwcdn.pl/fpo/11/58/1158/7879818.3.jpg",
  },
  {
    id: 4830,
    title: "Człowiek na torze ",
    year: 1956,
    thumbnail: "https://fwcdn.pl/fpo/48/30/4830/7182176.3.jpg",
  },
];

const MovieGenres: React.FC = (props) => {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const changeTagHandler = (tag: string) => {
    setSelectedTag(tag);
  };
  return (
    <div>
      <CategoryHeader
        title="Gatunki"
        path="images/genre.png"
        alt="gatunki filmowe"
      />
      <DropDownMenu
        fetchList={getGenres}
        startTitle={selectedTag || "Gatunek"}
        onSelectTag={changeTagHandler}
      />

      <MoviesCoverList tag={selectedTag} fetch={getMovieByTag} />
    </div>
  );
};
export default MovieGenres;
