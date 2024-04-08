import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="pl-10 py-6">
      <h1 className="text-2xl text-white pb-4">{title}</h1>
      <div className="flex overflow-x-auto">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} imgSrc={movie?.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
