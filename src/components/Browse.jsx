import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";

import MovieListContainer from "./MovieListContainer";
import MovieBannerContainer from "./MovieBannerContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const gptSearchToggle = useSelector((store) => store.search.gptSearchToggle);
  useFetchMovies();
  return (
    <div className="h-screen w-screen">
      <Header />
      {gptSearchToggle ? (
        <GptSearchPage />
      ) : (
        <>
          <MovieBannerContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
