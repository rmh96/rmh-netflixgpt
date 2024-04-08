import React, { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addMyListMovies,
} from "../redux/movieSlice";
import { apiUrls } from "../utils/ApiUrls";

const useFetchMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const fetchNowPlayingMoviesList = async () => {
    try {
      const data = await fetch(apiUrls.nowPlayingMovies, MOVIE_API_OPTIONS);
      const res = await data.json();
      if (res !== undefined) {
        dispatch(addNowPlayingMovies(res.results));
      }
    } catch (e) {
      console.log(e.response);
    }
  };
  const fetchPopularMoviesList = async () => {
    try {
      const data = await fetch(apiUrls.popularMovies, MOVIE_API_OPTIONS);
      const res = await data.json();
      if (res !== undefined) {
        dispatch(addPopularMovies(res.results));
      }
    } catch (e) {
      console.log(e.response);
    }
  };
  const fetchMyListMoviesList = async () => {
    try {
      const data = await fetch(apiUrls.myListMovies, MOVIE_API_OPTIONS);
      const res = await data.json();
      if (res !== undefined) {
        dispatch(addMyListMovies(res.results));
      }
    } catch (e) {
      console.log(e.response);
    }
  };
  const fetchUpcomingMoviesList = async () => {
    try {
      const data = await fetch(apiUrls.upcomingMovies, MOVIE_API_OPTIONS);
      const res = await data.json();
      if (res !== undefined) {
        dispatch(addUpcomingMovies(res.results));
      }
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    if (!nowPlayingMovies) {
      fetchNowPlayingMoviesList();
      fetchPopularMoviesList();
      fetchMyListMoviesList();
      fetchUpcomingMoviesList();
    }
  }, []);
};

export default useFetchMovies;
