export const validateEmailAndPassword = (email, password) => {
  const res = {};
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordCheck =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  res.email = !emailCheck ? "Email ID not valid" : null;
  res.password = !passwordCheck ? "Password not valid" : null;

  return res;
};

export const checkPwdFormat = (password) => {
  const checkValuesRes = {
    eightCharacters: false,
    upperCase: false,
    lowerCase: false,
    specialCharacter: false,
    number: false,
  };
  if (password.length > 0) {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const numberRegex = /[0-9]/;

    checkValuesRes.upperCase = upperCaseRegex.test(password);
    checkValuesRes.lowerCase = lowerCaseRegex.test(password);
    checkValuesRes.specialCharacter = specialCharRegex.test(password);
    checkValuesRes.number = numberRegex.test(password);
    checkValuesRes.eightCharacters = password.length >= 8;
  }

  return checkValuesRes;
};
