import React from "react";
import useFirstMovieVideo from "../hooks/useFirstMovieVideo";
import { useSelector } from "react-redux";

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
