import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";

import MovieListContainer from "./MovieListContainer";
import MovieBannerContainer from "./MovieBannerContainer";

const Browse = () => {
  useFetchMovies();
  return (
    <div className="h-screen w-screen">
      <Header />
      <MovieBannerContainer />
      <MovieListContainer />
    </div>
  );
};

export default Browse;
