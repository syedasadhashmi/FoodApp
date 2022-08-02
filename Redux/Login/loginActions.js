import { LOGIN_SUCCESS, LOGIN_TIME_EXPIRES } from "./loginTypes";

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginTimeExpires = () => {
  return {
    type: LOGIN_TIME_EXPIRES,
  };
};

export const logoutTimer = (timer) => {
  setTimeout(() => {
    loginTimeExpires();
    console.log("hello");
    console.log(timer);
  }, timer);
};
