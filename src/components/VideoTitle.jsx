import React, { useEffect } from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black bg-opacity-55 pt-[22%] pl-10 space-y-10 absolute">
      <div className="text-5xl font-bold animate-go-up text-white drop-shadow-lg">
        {title}
      </div>
      <div className="w-[40%] animate-show-in line-clamp-2 text-white drop-shadow-lg">
        {overview}
      </div>
      <div className="flex space-x-10 justify-start items-center animate-show-in">
        <button className="bg-white bg-opacity-90 px-16 py-3 text-black rounded-lg text-xl font-bold hover:bg-opacity-100">
          ▶︎ Play
        </button>
        <button className="bg-black bg-opacity-60 px-16 py-3 text-white rounded-lg text-xl font-bold hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
