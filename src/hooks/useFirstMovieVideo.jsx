import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiUrls } from "../utils/ApiUrls";
import { setVideoOfFirstMovie } from "../redux/movieSlice";
import { MOVIE_API_OPTIONS } from "../utils/constants";

const useFirstMovieVideo = (id) => {
  const videoOfFirstMovie = useSelector(
    (store) => store.movies.videoOfFirstMovie
  );
  const dispatch = useDispatch();
  const fetchVideo = async () => {
    try {
      const data = await fetch(
        `${apiUrls.videoOfAMovie}/${id}/videos`,
        MOVIE_API_OPTIONS
      );
      const json = await data.json();

      const filteredData = json.results.filter(
        (item) => item.type === "Trailer"
      );
      const finalRes = filteredData?.length ? filteredData[0] : json.results[0];
      dispatch(setVideoOfFirstMovie(finalRes));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    !videoOfFirstMovie && fetchVideo();
  }, []);
};

export default useFirstMovieVideo;
