import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BG_IMG } from "../constants";
import { validateEmailAndPassword } from "../utils/validateForm";
import PwdChecker from "./PwdChecker";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const [errMessage, setErrMessage] = useState({
    email: null,
    password: null,
    loginErr: null,
  });
  const [pwdChecker, setPwdChecker] = useState(false);
  const [pwdValue, setPwdValue] = useState("");
  const toggleFormBehavior = () => {
    email.current.value = "";
    password.current.value = "";

    setPwdValue("");
    setErrMessage({});
    setSignInForm(!isSignInForm);
  };

  const submitForm = () => {
    const checkVal = validateEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setErrMessage({ errMessage, ...checkVal });
    if (checkVal.email || checkVal.password) return;

    // Sign in / Sign up logic
    //Sign UP logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: displayName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrMessage({ ...errMessage, loginErr: error.message });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage({ ...errMessage, loginErr: error.message });
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage({ ...errMessage, loginErr: error.message });
        });
    }
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
          ${LOGIN_BG_IMG}
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen flex justify-center items-center relative"
    >
      <div className="absolute bg-black opacity-50 w-full h-full z-0"></div>
      <Header />
      <form
        className="z-10 w-1/4 min-h-max flex flex-col items-center px-12 py-10 space-y-10 bg-black bg-opacity-75 rounded-lg"
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
              ref={displayName}
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
        {errMessage.loginErr && (
          <p className=" text-red-600 text-ls font-semibold">
            {errMessage.loginErr}
          </p>
        )}
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
