import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCard = ({ imgSrc }) => {
  if (!imgSrc) return;
  return (
    <img className="w-56 pr-5" src={MOVIE_IMG_CDN + imgSrc} alt="posterImg" />
  );
};

export default MovieCard;
