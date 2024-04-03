import React, { useEffect } from "react";

const ProfileEditHOC = (ProfileSectionComp) => {
  return function withEditOption(props) {
    return (
      <div className="relative h-full w-full">
        <ProfileSectionComp {...props} />
        <div className="absolute w-52 h-52 inset-0 bg-black bg-opacity-30 flex justify-center items-center text-5xl text-white">
          ✎
        </div>
      </div>
    );
  };
};

export default ProfileEditHOC;