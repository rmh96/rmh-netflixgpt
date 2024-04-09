import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";
import { aiModel } from "../utils/geminiai";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { addMovieList, errorHappenedInSearchAPI } from "../redux/searchSlice";

const GptSearchSection = () => {
  const dispatch = useDispatch();
  const gptSearchValue = useRef(null);
  const lang = useSelector((store) => store.appConfig.lang);

  const searchMovieDetails = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1H`,
      MOVIE_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    try {
      const promptQuery = `Act as a movie recommendation system, and suggest movies for this query : ${gptSearchValue.current.value}.  Only give me names of 5 movies in a example format like ahead.  Example format:  ["Avengers", "Fury", "Life of PI", "Forrest Grump", "Finding Nemo"]`;
      const result = await aiModel.generateContent(promptQuery);
      const response = await result.response;
      const text = response.text();
      if (!text[0] === "[") {
        console.log("Something went wrong, Try again");
        throw new Error("Search Again");
      }

      const movieNames = JSON.parse(text);
      const moviesDetails = movieNames.map((movie) =>
        searchMovieDetails(movie)
      );
      const tmdbResults = await Promise.all(moviesDetails);
      dispatch(
        addMovieList({ movieNames: movieNames, movieDetails: tmdbResults })
      );
    } catch (e) {
      console.log("Error in GPT AI search - ", e);
      dispatch(errorHappenedInSearchAPI());
    }
  };

  return (
    <div className="bg-black p-2 w-full md:p-3 md:w-1/2 z-10 md:ml-20 searchBarGoUpMob searchBarGoUp rounded-3xl">
      <form
        className="grid grid-flow-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearch();
        }}
      >
        <input
          ref={gptSearchValue}
          className="py-3 pl-2 col-span-9 md:col-span-8 font-semibold rounded-l-2xl outline-none text-[13px] md:text-base"
          type="text"
          placeholder={LANGUAGE_CONSTANTS[lang].gptSearchPlaceHolder}
        />
        <button
          type="submit"
          className="p-3 text-white bg-red-700 col-span-2 md:col-span-3 rounded-r-2xl font-semibold text-[13px] md:text-base"
        >
          {LANGUAGE_CONSTANTS[lang].gptSearchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchSection;
