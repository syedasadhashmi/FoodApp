import axios from "axios";
import data from "./data.json";
import { apiUrl } from "../../utils/constant";
import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_FAILURE,
} from "./restaurantsTypes";
export const fetchRestaurants = () => {
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/vendor-service/vendor/vendors`) //fake api
      .then((response) => {
        dispatch({ type: FETCH_RESTAURANTS, payload: response.data }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: error.message });
      });
  };
};
