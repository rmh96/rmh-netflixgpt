import React, { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { apiUrls } from "../utils/ApiUrls";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
    fetchNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;