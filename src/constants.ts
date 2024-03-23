import { ListData } from "./api/api";

export const emptyImagePath: string = "/images/empty_image.png";
type items = {
  type: string;
  name: string;
  contact?: string;
};

export const team: items[] = [
  {
    type: "Frontend",
    name: "Mateusz Zasada",
    contact: "github.com/mateusz-92",
  },
  {
    type: "Projekt Graficzny",
    name: "Paweł Woźniak",
    contact: "",
  },
  {
    type: "Web Api",
    name: "Marcin Mojski",
    contact: "",
  },
  {
    type: "Code Review ",
    name: "",
    contact: "",
  },
  {
    type: "Kontakt",
    name: "",
    contact: "cobytuobejrzec.app@gmail.com",
  },
  {
    type: "Technologie",
    name: "React, Next JS, Type Script",
  },
];
export const vodServices: ListData[] = [
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
export const yearsList: ListData[] = [
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
