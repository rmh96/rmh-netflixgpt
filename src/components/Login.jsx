import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { loginBgPage } from "../constants";
import { validateEmailAndPassword } from "../utils/validateForm";
import PwdChecker from "./PwdChecker";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errMessage, setErrMessage] = useState({
    email: null,
    password: null,
  });
  const [pwdChecker, setPwdChecker] = useState(false);
  const [pwdValue, setPwdValue] = useState("");
  const toggleFormBehavior = () => {
    email.current.value = "";
    password.current.value = "";
    setErrMessage({});
    setSignInForm(!isSignInForm);
  };

  const submitForm = () => {
    const checkVal = validateEmailAndPassword(
      email.current.value,
      password.current.value
    );
    console.log(checkVal);
    setErrMessage(checkVal);
  };

  const passwordChanged = () => {
    password.current && setPwdValue(password.current.value);
  };

  useEffect(() => {
    const passwordEle = password.current;
    if (passwordEle) {
      passwordEle.addEventListener("focus", (e) => {
        setPwdChecker(true);
      });
      passwordEle.addEventListener("blur", (e) => {
        setPwdChecker(false);
      });
    }
    return () => {
      if (passwordEle) {
        passwordEle.removeEventListener("focus", (e) => {
          setPwdChecker(true);
        });
        passwordEle.removeEventListener("blur", (e) => {
          setPwdChecker(false);
        });
      }
    };
  }, []);

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
      <form
        className="z-10 w-1/4 h-3/5  flex flex-col items-center px-12 pt-10 space-y-10 bg-black bg-opacity-60"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <span className="text-white font-bold text-4xl w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </span>
        <div className="flex flex-col space-y-5 w-full relative">
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className=" pl-5 py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white text-white"
          />
          {errMessage.email && (
            <p className=" text-red-600 text-ls font-semibold">
              {errMessage.email}
            </p>
          )}
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              className=" pl-5 py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white text-white"
            />
          ) : null}
          <input
            ref={password}
            autoComplete="false"
            type="password"
            value={pwdValue}
            placeholder="Password"
            onChange={passwordChanged}
            className="pl-5 py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white text-white"
          />
          {!isSignInForm && pwdChecker ? (
            <PwdChecker password={pwdValue} />
          ) : null}
          {errMessage.password && (
            <p className=" text-red-600 text-ls font-semibold">
              {errMessage.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="p-2 w-full bg-red-600 text-white text-center"
        >
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
