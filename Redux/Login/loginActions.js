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

export const logoutTimer = (dispatch, timer) => {
  setTimeout(() => {
    dispatch(loginTimeExpires());
    console.log("hello");
    console.log(timer);
  }, timer);
};
// export const verifyToken = () => {
//   if (localStorage.getItem("tokenDetails")) {
//     console.log("correct");
//   } else {
//     console.log("false");
//   }
// };
