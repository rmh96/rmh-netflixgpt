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
