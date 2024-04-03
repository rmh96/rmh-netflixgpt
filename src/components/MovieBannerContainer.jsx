import React from "react";
import VideoTitle from "./VideoTitle";
import BackGroundVideo from "./BackGroundVideo";
import { useSelector } from "react-redux";

const MovieBannerContainer = () => {
  const movieDetails = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movieDetails) return;

  const { id, title, overview } = movieDetails[0];
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <BackGroundVideo id={id} />
    </div>
  );
};

export default MovieBannerContainer;
