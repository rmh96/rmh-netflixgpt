import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BG_IMG } from "../utils/constants";
import { validateEmailAndPassword } from "../utils/validateForm";
import PwdChecker from "./PwdChecker";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";

const Login = () => {
  const lang = useSelector((store) => store.appConfig.lang);
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
        className="z-10 w-[95%] md:w-1/4 min-h-max flex flex-col items-center px-12 py-10 mt-10 space-y-10 bg-black bg-opacity-75 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <span className="text-white font-bold text-3xl md:text-4xl w-full">
          {isSignInForm
            ? LANGUAGE_CONSTANTS[lang].signIn
            : LANGUAGE_CONSTANTS[lang].signUp}
        </span>
        <div className="flex flex-col space-y-3 md:space-y-5 w-full relative">
          <input
            ref={email}
            type="email"
            placeholder={LANGUAGE_CONSTANTS[lang].emailPlaceHd}
            className=" pl-5 py-2 md:py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white text-white"
          />
          {errMessage.email && (
            <p className=" text-red-600 text-ls font-semibold">
              {LANGUAGE_CONSTANTS[lang].emailErr}
            </p>
          )}
          {!isSignInForm ? (
            <input
              ref={displayName}
              type="text"
              placeholder={LANGUAGE_CONSTANTS[lang].fullNamePlaceHd}
              className=" pl-5 py-2 md:py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white text-white"
            />
          ) : null}
          <input
            ref={password}
            autoComplete="false"
            type="password"
            value={pwdValue}
            placeholder={LANGUAGE_CONSTANTS[lang].pwdPlaceHd}
            onChange={passwordChanged}
            className="pl-5 py-2 md:py-4 w-full border border-white border-opacity-20 bg-white bg-opacity-10 outline-white text-white"
          />
          {!isSignInForm && pwdChecker ? (
            <PwdChecker password={pwdValue} />
          ) : null}
          {errMessage.password && (
            <p className=" text-red-600 text-ls font-semibold">
              {LANGUAGE_CONSTANTS[lang].pwdErr}
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
          {isSignInForm
            ? LANGUAGE_CONSTANTS[lang].signIn
            : LANGUAGE_CONSTANTS[lang].signUp}
        </button>
        <p
          className="text-white p-2 w-full cursor-pointer"
          onClick={toggleFormBehavior}
        >
          {isSignInForm
            ? LANGUAGE_CONSTANTS[lang].signInPageTxt
            : LANGUAGE_CONSTANTS[lang].signUpPageTxt}
        </p>
      </form>
    </div>
  );
};

export default Login;
