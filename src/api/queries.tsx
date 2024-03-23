import { useQuery } from "@tanstack/react-query";
import {
  MovieData,
  fetchRandomMovie,
  ListData,
  getMovieById,
  FunFact,
  fetchRandomFunFact,
  getGenres,
  getLists,
} from "./api";

export const QUERY_KEYS = {
  randomMovie: "randomMovie",
  listMovie: "listMovie",
  movieById: "movieById",
  randomFunFact: "randomFunFact",
  genres: "genres",
  lists: "lists",
};

export const useGetRandomMovie = () => {
  return useQuery<MovieData>({
    queryKey: [QUERY_KEYS.randomMovie],
    queryFn: fetchRandomMovie,
  });
};

export const useGetMovieById = (id: string) => {
  return useQuery<MovieData>({
    queryKey: [QUERY_KEYS.movieById, id],
    queryFn: () => getMovieById(id),
  });
};

export const useGetRandomFunFact = () => {
  return useQuery<FunFact>({
    queryKey: [QUERY_KEYS.randomFunFact],
    queryFn: fetchRandomFunFact,
  });
};

export const useGetGenres = () => {
  return useQuery<ListData[]>({
    queryKey: [QUERY_KEYS.genres],
    queryFn: getGenres,
  });
};

export const useGetLists = () => {
  return useQuery<ListData[]>({
    queryKey: [QUERY_KEYS.lists],
    queryFn: getLists,
  });
};
