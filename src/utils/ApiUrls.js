import { TMDB_API_KEY } from "./constants";

export const apiUrls = {
  nowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?page=1`,
  popularMovies: "https://api.themoviedb.org/3/movie/popular",
  myListMovies: "https://api.themoviedb.org/3/movie/top_rated",
  upcomingMovies: "https://api.themoviedb.org/3/movie/upcoming",
  videoOfAMovie: "https://api.themoviedb.org/3/movie",
};
