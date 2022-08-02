import { LOGIN_SUCCESS, LOGIN_TIME_EXPIRES } from "./loginTypes";

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginTimeExpires = () => {
  localStorage.removeItem("tokenDetails");
  return {
    type: LOGIN_TIME_EXPIRES,
  };
};

export const saveToLocalStorage = (data) => {
  localStorage.setItem("tokenDetails", JSON.stringify(data));
};
export const logoutTimer = (timer) => {
  setTimeout(() => {
    loginTimeExpires();
    console.log("hello");
    console.log(timer);
  }, timer);
};
// export const checkAutoLogin = () => {
//   const tokenDetailsString = localStorage.getItem("tokenDetails");
//   let tokenDetails = "";
//   if (!tokenDetailsString) {
//     loginTimeExpires();
//     return;
//   }
//   tokenDetails = JSON.parse(tokenDetailsString);
//   let expireDate = new Date(tokenDetails.expireDate);
//   let todaysDate = new Date();

//   if (todaysDate > expireDate) {
//     loginTimeExpires();
//     return;
//   }
//   loginSuccess(tokenDetailsString);
//   const timer = expireDate.getTime() - todaysDate.getTime();
//   logoutTimer(timer);
// };
