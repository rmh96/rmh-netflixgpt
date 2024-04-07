import React from "react";
import { LOGIN_BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchSection from "./GptSearchSection";

const GptSearchPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(
      ${LOGIN_BG_IMG}
    )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen flex flex-col items-center transition-all ease-linear"
    >
      <div className="absolute bg-black opacity-50 w-full h-full z-0"></div>
      <GptSearchSection />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
