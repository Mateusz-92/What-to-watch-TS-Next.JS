import axios, { AxiosResponse } from "axios";

export type MovieData = {
  id: number;
  fwId?: number;
  title: string;
  originalTitle: string;
  year: number;
  country: string;
  description: string;
  thumbnail: string;
  genres: string[];
  lists?: string[];
  vod?: string[];
  tags?: string[] | null;
};
export type ListData = {
  tagId?: string;
  listName: string;
  description?: string | null;
};
export type MovieItem = {
  id: number;
  title: string;
  year: number;
  thumbnail: string;
};
export type FunFact = {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
  relatedMovies: {
    id: number;
    title: string;
    year: number;
    thumbnail: string;
  }[];
};

export const api = {
  baseURL: "https://wtwapi.azurewebsites.net/",
  get: async (path: string, params: object = {}) => {
    const response: AxiosResponse = await axios({
      method: "GET",
      url: `${api.baseURL}${path}`,
      params,
    });
    return response?.data;
  },
};

export const fetchRandomMovie = (): Promise<MovieData> => {
  return api.get("movie/random");
};

export const fetchListMovie = (): Promise<ListData> => {
  return api.get("lists");
};

export const getMovieByTag = (tag: string): Promise<MovieItem[]> => {
  return api.get(`movie/tag/${tag}`);
};

export const getMovieByDecade = (decade: string): Promise<MovieItem[]> => {
  return api.get(`movie/years/${decade}`);
};

export const getMovieById = (id: string): Promise<MovieData> => {
  return api.get(`movie/${id}`);
};

export const fetchRandomFunFact = (): Promise<FunFact> => {
  return api.get("funfact/random");
};

export const getRandomSuggestedMovie = (id: string): Promise<MovieItem[]> => {
  return api.get(`movie/${id}/suggestions`);
};

export const getGenres = (): Promise<ListData[]> => {
  return api.get("genres");
};

export const getLists = (): Promise<ListData[]> => {
  return api.get("lists");
};

export const getVodMovie = (service: string): Promise<MovieItem[]> => {
  return api.get(`/vod/${service}`);
};
