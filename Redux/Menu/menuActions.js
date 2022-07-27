import axios from "axios";
import { FETCH_MENU, FETCH_MENU_FAILURE } from "./menuTypes";
import data2 from "./data2.json";

export const fetchMenu = (id) => {
  console.log(id);
  return async (dispatch) => {
    await axios
      .get(
        `http://10.4.40.62:8080/vendor-service/menuGroup/restaurant?vendorId=${id}`
      ) //fake api
      .then((response) => {
        dispatch({ type: FETCH_MENU, payload: response.data }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_MENU_FAILURE, payload: error.message });
      });
  };
};
