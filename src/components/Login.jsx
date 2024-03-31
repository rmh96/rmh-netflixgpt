import React, { useState } from "react";
import Header from "./Header";
import { loginBgPage } from "../constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleFormBehavior = () => setSignInForm(!isSignInForm);
  return (
    <div
      style={{
        backgroundImage: `url(
          ${loginBgPage}
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-full w-full flex justify-center items-center relative"
    >
      <div className="absolute bg-black opacity-55 w-full h-full z-0"></div>
      <Header />
      <form className="z-10 w-1/4 h-3/5  flex flex-col items-center px-12 pt-10 space-y-10 bg-black bg-opacity-60">
        <span className="text-white font-bold text-4xl w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </span>
        <div className="flex flex-col space-y-5 w-full">
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              className=" pl-5 py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white"
            />
          ) : null}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className=" pl-5 py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white"
          />
          <input
            type="password"
            placeholder="Password"
            className=" pl-5 py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white"
          />
        </div>
        <button className="p-2 w-full bg-red-600 text-white text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white p-2 w-full cursor-pointer"
          onClick={toggleFormBehavior}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
