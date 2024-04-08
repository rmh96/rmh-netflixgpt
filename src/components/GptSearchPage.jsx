import React from "react";
import { LOGIN_BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchSection from "./GptSearchSection";
import { useSelector } from "react-redux";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";

const GptSearchPage = () => {
  const lang = useSelector((store) => store.appConfig.lang);
  const searchError = useSelector((store) => store.search.errorDurningSearch);
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
      {!searchError ? (
        <GptMovieSuggestions />
      ) : (
        <div className="w-screen text-white text-2xl z-20 text-center p-10">
          {LANGUAGE_CONSTANTS[lang].searchError}
        </div>
      )}
    </div>
  );
};

export default GptSearchPage;
