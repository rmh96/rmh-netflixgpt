import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieList } = useSelector((store) => store.search);
  if (!movieNames) return;
  return (
    <div className="bg-black bg-opacity-20 w-screen p-2 mx-4 z-20 text-white overflow-y-scroll">
      <div>
        {movieNames.map((movie, index) => {
          return (
            movieList[index].length && (
              <MovieList key={movie} title={movie} movies={movieList[index]} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
