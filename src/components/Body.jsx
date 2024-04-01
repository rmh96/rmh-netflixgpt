import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        //navigate("/browse");
      } else {
        dispatch(removeUser());
        //navigate("/login");
      }
    });
  }, []);
  return <RouterProvider router={appRouter} />;
};

export default Body;
