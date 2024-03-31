import React, { useEffect, useState } from "react";
import { checkPwdFormat } from "../utils/validateForm";

const PwdChecker = ({ password }) => {
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
    <div className="absolute -right-[330px] -bottom-20 h-44 p-8 bg-black bg-opacity-60">
      <ul className="text-white">
        <li className="flex space-x-2 pb-1">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.eightCharacters ? "bg-green-600" : ""
            }`}
          ></div>
          <div>Should have atleast 8 characters</div>
        </li>
        <li className="flex space-x-2 pb-1">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.upperCase ? "bg-green-600" : ""
            }`}
          ></div>
          <div>Use atleast one upper case</div>
        </li>
        <li className="flex space-x-2 pb-1">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.lowerCase ? "bg-green-600" : ""
            }`}
          ></div>
          <div>Use atleast one lower case </div>
        </li>
        <li className="flex space-x-2 pb-1">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.specialCharacter ? "bg-green-600" : ""
            }`}
          ></div>
          <div>Use one special character</div>
        </li>
        <li className="flex space-x-2 pb-1">
          <div
            className={`w-4 h-4 border-2 border-white rounded-full ${
              checkVal.number ? "bg-green-600" : ""
            }`}
          ></div>
          <div>Use atleast one number</div>
        </li>
      </ul>
    </div>
  );
};

export default PwdChecker;
