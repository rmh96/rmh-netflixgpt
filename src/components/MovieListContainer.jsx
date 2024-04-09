import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="z-20 relative pt-10 md:pt-0 md:-mt-72">
        <MovieList title={"Matched to You"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"US Drama"} movies={movies?.popularMovies} />
        <MovieList title={"My List"} movies={movies?.myListMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieListContainer;
