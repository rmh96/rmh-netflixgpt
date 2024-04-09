import React, { useEffect } from "react";

const ProfileEditHOC = (ProfileSectionComp) => {
  return function withEditOption(props) {
    return (
      <div className="relative md:h-full md:w-full">
        <ProfileSectionComp {...props} />
        <div className="absolute top-0 border right-0 w-24 h-24 md:h-52 md:w-52 inset-0 bg-black bg-opacity-30 flex justify-center items-center text-2xl md:text-5xl text-white">
          ✎
        </div>
      </div>
    );
  };
};

export default ProfileEditHOC;
