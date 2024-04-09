import React, { useEffect, useState } from "react";
import { checkPwdFormat } from "../utils/validateForm";
import { useSelector } from "react-redux";
import { LANGUAGE_CONSTANTS } from "../utils/languageConstant";

const PwdChecker = ({ password }) => {
  const lang = useSelector((store) => store.appConfig.lang);
  const [checkVal, setCheckVal] = useState({
    eightCharacters: true,
    upperCase: false,
    lowerCase: true,
    specialCharacter: false,
    number: false,
  });

  useEffect(() => {
    const res = checkPwdFormat(password);
    setCheckVal(res);
  }, [password]);

  return (
    <div className="md:absolute md:-right-[330px] md:-bottom-20 h-48 md:h-44 md:p-8 bg-black bg-opacity-60">
      <ul className="text-white">
        <li className="flex items-center space-x-2 ">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.eightCharacters ? "bg-green-600" : ""
            }`}
          ></div>
          <div>{LANGUAGE_CONSTANTS[lang].pwdCheck1}</div>
        </li>
        <li className="flex items-center space-x-2 ">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.upperCase ? "bg-green-600" : ""
            }`}
          ></div>
          <div>{LANGUAGE_CONSTANTS[lang].pwdCheck2}</div>
        </li>
        <li className="flex items-center space-x-2">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.lowerCase ? "bg-green-600" : ""
            }`}
          ></div>
          <div>{LANGUAGE_CONSTANTS[lang].pwdCheck3}</div>
        </li>
        <li className="flex items-center space-x-2">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.specialCharacter ? "bg-green-600" : ""
            }`}
          ></div>
          <div>{LANGUAGE_CONSTANTS[lang].pwdCheck4}</div>
        </li>
        <li className="flex items-center space-x-2">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.number ? "bg-green-600" : ""
            }`}
          ></div>
          <div>{LANGUAGE_CONSTANTS[lang].pwdCheck5}</div>
        </li>
      </ul>
    </div>
  );
};

export default PwdChecker;
