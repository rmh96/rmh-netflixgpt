import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { disableProfileToBrowseFlag } from "../redux/profileSlice";
import { setGptSearch } from "../redux/searchSlice";
import { setLangForSite } from "../redux/appConfigSlice";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";

const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.appConfig.lang);
  const user = useSelector((store) => store.user);
  const profileSelected = useSelector((store) => store.profile.profileSelected);
  const navigate = useNavigate();
  const [openSignOutBox, setSignOutBox] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Error while SignOut - ", error);
        //Need to create a Error Page
      });
  };

  const handleGptSearch = () => {
    dispatch(setGptSearch());
  };

  const handleLangChange = (e) => {
    dispatch(setLangForSite(e.target.value));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        profileSelected ? navigate("/browse") : navigate("/profile");
      } else {
        dispatch(removeUser());
        navigate("/");
        dispatch(disableProfileToBrowseFlag(false));
      }
    });

    //Unsubscribe the onAuthStateChanged action callback on unmount
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="absolute w-full top-0 left-0 h-28 px-10 py-2 bg-gradient-to-b from-black flex items-center justify-between z-20">
      <img className=" h-18 w-52" src={LOGO} alt="app-logo" />
      <select
        className={`absolute p-1 bg-gray-700 text-white mr-6 font-semibold ${
          user && profileSelected
            ? "right-72"
            : user && !profileSelected
            ? "right-44"
            : "right-10"
        }`}
        value={lang}
        onChange={handleLangChange}
      >
        {SUPPORTED_LANGUAGES.map((item) => {
          return (
            <option value={item.identifier} key={item.identifier}>
              {item.name}
            </option>
          );
        })}
      </select>

      {user ? (
        <div className="relative flex space-x-2 items-center cursor-pointer transition-all">
          {profileSelected ? (
            <button
              className="relative top-0 right-2 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md shadow-purple-300 hover:top-[4px] hover:shadow-none"
              // style={{ boxShadow: "0px 8px 0px purple" }}
              onClick={handleGptSearch}
            >
              {LANGUAGE_CONSTANTS[lang].gptSearchNavButton}
            </button>
          ) : null}
          <span className="text-white font-semibold mx-2">
            {user.displayName}
          </span>
          <img
            className="w-10 h-10"
            onMouseEnter={() => setSignOutBox(true)}
            onMouseLeave={() => setSignOutBox(false)}
            src={USER_ICON}
            alt="user-icon"
          />
          <div className="text-3xl">▾</div>
          {openSignOutBox ? (
            <div
              className="absolute w-28 top-full -right-2 p-2 bg-black bg-opacity-35 text-white font-semibold text-center cursor-pointer"
              onMouseEnter={() => setSignOutBox(true)}
              onMouseLeave={() => setSignOutBox(false)}
              onClick={handleSignOut}
            >
              <span>Sign Out</span>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
