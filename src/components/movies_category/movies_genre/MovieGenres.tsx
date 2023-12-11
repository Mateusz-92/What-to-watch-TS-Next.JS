import React, { useState, useEffect } from "react";
import { getGenres, getMovieByTag } from "../../../pages/api/api";
// import { MenuData } from "../../common/drop_down_menu/DropDown";
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
// const genresTmp = [
//   {
//     tagId: null,
//     listName: "Dramat",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Komedia",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Psychologiczny",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Wojenny",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Sci-Fi",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Przygodowy",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Dramat obyczajowy",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Thriller",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Melodramat",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Biograficzny",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Romans",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Dramat historyczny",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Obyczajowy",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Sensacyjny",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Niemy",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Kryminał",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Musical",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Kostiumowy",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Fantasy",
//     description: null,
//   },
//   {
//     tagId: null,
//     listName: "Polityczny",
//     description: null,
//   },
// ];
const MovieGenres: React.FC = (props) => {
  const [genres, setGenres] = useState<ListData[]>([]);
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
      //
      <MoviesCoverList tag={selectedTag} fetch={getMovieByTag} />
     
    </div>
  );
};
export default MovieGenres;
