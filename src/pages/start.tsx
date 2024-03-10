import Carousel, { Item } from "@/components/carousel/Carousel";
import {
  MOVIE_RANK,
  MOVIE_YEAR,
  MOVIE_OUR_FAVOURITES,
  MOVIE_GENRES,
  MOVIE_RANDOM,
  MOVIE_VOD,
} from "@/routes";
import React from "react";
const items = [
  {
    name: "Ranking",
    redirect: MOVIE_RANK,
    image: "/images/rank.png",
  },
  {
    name: "Rok produkcji",
    redirect: MOVIE_YEAR,
    image: "/images/year_of_production.png",
  },
  {
    name: "Polecane",
    redirect: MOVIE_OUR_FAVOURITES,
    image: "/images/recommended.png",
  },
  {
    name: "Gatunek",
    redirect: MOVIE_GENRES,
    image: "/images/genre.png",
  },
  {
    name: "Losowy",
    redirect: MOVIE_RANDOM,
    image: "/images/select_tag.png",
  },
  {
    name: "Vod",
    redirect: MOVIE_VOD,
    image: "/images/vod.png",
  },
];

const Start: React.FC = () => {
  return (
    <>
      <Carousel items={items} />
    </>
  );
};

export default Start;
