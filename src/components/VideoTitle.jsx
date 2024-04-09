import React, { useEffect } from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black bg-opacity-55 pt-[19%] md:pt-[22%] pl-2 md:pl-10 space-y-10 absolute">
      <div className="text-lg md:text-5xl font-bold animate-go-up text-white drop-shadow-lg">
        {title}
      </div>
      <div className="w-[80%] md:w-[40%] text-[12px] md:text-lg md:animate-show-in line-clamp-2 text-white drop-shadow-lg">
        {overview}
      </div>
      <div className="flex space-x-10 justify-start items-center animate-show-in">
        <button className="bg-white bg-opacity-90 px-6 py-1 md:px-16 md:py-3 text-black rounded-lg text-base md:text-xl font-bold hover:bg-opacity-100">
          ▶︎ Play
        </button>
        <button className=" bg-gray-500 bg-opacity-60 px-6 py-1 md:px-16 md:py-3 text-white rounded-lg text-base md:text-xl font-bold hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
