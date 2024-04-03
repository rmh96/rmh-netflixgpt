import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO } from "../utils/constants";
import { disableProfileToBrowseFlag } from "../redux/profileSlice";

const Header = () => {
  const dispatch = useDispatch();
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
      {user ? (
        <div className="relative flex space-x-2 items-center cursor-pointer transition-all">
          <span className="text-white font-semibold mx-2">
            {user.displayName}
          </span>
          <img
            className="w-10 h-10"
            onMouseEnter={() => setSignOutBox(true)}
            onMouseLeave={() => setSignOutBox(false)}
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="user-icon"
          />
          <div className="text-3xl">▾</div>
          {openSignOutBox ? (
            <div
              className="absolute w-28 top-full left-8 p-2 bg-black bg-opacity-35 text-white font-semibold text-center cursor-pointer"
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
