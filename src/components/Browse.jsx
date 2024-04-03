import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MovieListContainer from "./MovieListContainer";
import MovieBannerContainer from "./MovieBannerContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="h-screen w-screen">
      <Header />
      <MovieBannerContainer />
      <MovieListContainer />
    </div>
  );
};

export default Browse;
