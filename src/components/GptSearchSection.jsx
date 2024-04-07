import React from "react";
import { useSelector } from "react-redux";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";

const GptSearchSection = () => {
  const lang = useSelector((store) => store.appConfig.lang);
  return (
    <div className="bg-black p-4 w-1/2 z-10 ml-20 mt-[24%]">
      <form className="grid grid-flow-col">
        <input
          className="py-3 pl-2 col-span-8 font-semibold rounded-l-2xl"
          type="text"
          placeholder={LANGUAGE_CONSTANTS[lang].gptSearchPlaceHolder}
        />
        <button className="p-3 text-white bg-red-700 col-span-3 rounded-r-2xl font-semibold">
          {LANGUAGE_CONSTANTS[lang].gptSearchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchSection;
