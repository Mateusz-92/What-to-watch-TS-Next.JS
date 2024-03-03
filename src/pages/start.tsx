import Carousel, { Item } from "@/components/carousel/Carousel";
import React from "react";
const items: Item[] = [
  {
    name: "Ranking",
    redirect: "rank",
    image: "/images/rank.png",
  },
  {
    name: "Rok produkcji",
    redirect: "year",
    image: "/images/year_of_production.png",
  },
  {
    name: "Polecane",
    redirect: "ourfavourites",
    image: "/images/recommended.png",
  },

  {
    name: "Gatunek",
    redirect: "genres",
    image: "/images/genre.png",
  },
  {
    name: "Losowy",
    redirect: "random",
    image: "/images/select_tag.png",
  },
  {
    name: "Vod",
    redirect: "vod",
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
