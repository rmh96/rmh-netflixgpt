import React from "react";
import { PROFILE_GATE_DATA } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfileToBrowseFlag } from "../redux/profileSlice";

const ProfileSection = ({ img, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center space-y-4 group cursor-pointer"
      onClick={() => {
        console.log("Hello");
        dispatch(setProfileToBrowseFlag(true));
        navigate("/browse");
      }}
    >
      <img
        className="w-24 h-24 md:h-52 md:w-52 border-4 border-black group-hover:border-white"
        src={img}
        alt="profile-pic"
      />
      <div className="text-xl opacity-60 group-hover:opacity-100">{name}</div>
    </div>
  );
};

export default ProfileSection;
