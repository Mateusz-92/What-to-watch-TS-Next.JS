import React from "react";
import styles from "./Carousel.module.css";

import { useState } from "react";
import { useRouter } from "next/router";

const Carousel: React.FC = () => {
  type Item = {
    name: string;
    redirect: string;
    image: string;
  };
  const items: Item[] = [
    {
      name: "Ranking",
      redirect: "/rank",
      image: "/images/rank.png",
    },
    {
      name: "Rok produkcji",
      redirect: "/year",
      image: "/images/year_of_production.png",
    },
    {
      name: "Polecane",
      redirect: "/ourfavourites",
      image: "/images/recommended.png",
    },

    {
      name: "Gatunek",
      redirect: "/genres",
      image: "/images/genre.png",
    },
    {
      name: "Losowy",
      redirect: "/random",
      image: "/images/select_tag.png",
    },
    {
      name: "Vod",
      redirect: "/vod",
      image: "/images/vod.png",
    },
  ];
  const [index, setIndex] = useState<number>(0);
  const nextItemHandler = () => {
    setIndex((index) => (index + 1) % Object.keys(items).length);
  };
  const previousItemHandler = () => {
    setIndex((index) => {
      if (index === 0) {
        return (index = Object.keys(items).length - 1);
      } else {
        return (index - 1) % Object.keys(items).length;
      }
    });
  };
  const router = useRouter();
  const navigateHandler = (path: string) => {
    router.push(`/${path}`);
  };
  return (
    <div>
      <div>
        <button></button>
        <button></button>
        <img onClick={() => navigateHandler(items[index].redirect)}></img>
        <span></span>
      </div>
    </div>
  );
};

export default Carousel;
