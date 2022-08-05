import { LOGIN_SUCCESS, LOGIN_TIME_EXPIRES } from "./loginTypes";
const initialState = {
  refresh_token: "",
  access_token: "",
  expires_in: "",
  isLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.payload);
      localStorage.setItem("tokenDetails", action.payload.access_token);
      return {
        refresh_token: action.payload.refresh_token,
        access_token: action.payload.access_token,
        expires_in: action.payload.expires_in,
        isLogin: true,
      };
    case LOGIN_TIME_EXPIRES:
      return {
        isLogin: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
