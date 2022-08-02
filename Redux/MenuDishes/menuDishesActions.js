import axios from "axios";
import {
  FETCH_MENU_DISHES,
  FETCH_MENU_DISHES_FAILURE,
} from "./menuDishesTypes";
import data3 from "./data3.json";
import { apiUrl } from "../../utils/constant";

export const fetchMenuDishes = (id) => {
  console.log(id);
  return async (dispatch) => {
    await axios
      // http://10.4.41.213:8080/vendor-service/menuGroup/restaurant?vendorId=${id}

      .get(`${apiUrl}/vendor-service/catalogItem/menuGroup?menuGroupId=${id}`) //fake api
      .then((response) => {
        dispatch({ type: FETCH_MENU_DISHES, payload: response.data, id: id }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_MENU_DISHES_FAILURE, payload: error.message });
      });
  };
};
