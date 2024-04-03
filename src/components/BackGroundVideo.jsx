import React, { useEffect } from "react";
import { apiUrls } from "../utils/ApiUrls";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setVideoOfFirstMovie } from "../redux/movieSlice";
import useFirstMovieVideo from "../hooks/useFirstMovieVideo";

const BackGroundVideo = ({ id }) => {
  useFirstMovieVideo(id);
  const videoDetails = useSelector((store) => store.movies?.videoOfFirstMovie);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoDetails?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackGroundVideo;
