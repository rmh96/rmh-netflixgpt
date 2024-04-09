import React, { useState } from "react";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import { PROFILE_GATE_DATA } from "../utils/constants";
import ProfileEditHOC from "./ProfileEditHOC";
import { useSelector } from "react-redux";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";

const Profile = () => {
  const lang = useSelector((store) => store.appConfig.lang);
  const [manageProfileToggle, setManagerProfileToggle] = useState(false);
  const handleManagerProfile = () => {
    setManagerProfileToggle(!manageProfileToggle);
  };

  const ProfileSectionWithEdit = ProfileEditHOC(ProfileSection);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <Header />
      <div className="h-1/2 flex flex-col justify-center items-center text-white animate-fade-in p-10">
        <div className="text-4xl md:text-6xl w-full text-center">
          {LANGUAGE_CONSTANTS[lang].profileSlogan}
        </div>
        <div className="h-full flex flex-wrap justify-center md:flex-nowrap space-x-5 mt-10">
          {PROFILE_GATE_DATA.map(({ id, ...item }) => {
            return manageProfileToggle ? (
              <ProfileSectionWithEdit {...item} key={id} />
            ) : (
              <ProfileSection {...item} key={id} />
            );
          })}
          <div
            className={`flex flex-col items-center space-y-4 group ${
              manageProfileToggle ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <div className="w-36 h-52 md:w-52 text-5xl flex justify-center mr-2 items-center border-white  group-hover:bg-white group-hover:bg-opacity-35">
              ✎
            </div>
            <div className="text-xl opacity-60 group-hover:opacity-100">
              {LANGUAGE_CONSTANTS[lang].addProfile}
            </div>
          </div>
        </div>
        <button
          className="mt-20 py-2 px-10 opacity-60 border border-opacity-60 text-lg hover:opacity-100 hover:border-opacity-100"
          onClick={handleManagerProfile}
        >
          {manageProfileToggle
            ? LANGUAGE_CONSTANTS[lang].doneProfile
            : LANGUAGE_CONSTANTS[lang].manageProfile}
        </button>
      </div>
    </div>
  );
};

export default Profile;
