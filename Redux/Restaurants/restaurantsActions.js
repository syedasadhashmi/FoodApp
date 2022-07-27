import axios from "axios";
import data from "./data.json";
import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_FAILURE,
} from "./restaurantsTypes";
export const fetchRestaurants = () => {
  return async (dispatch) => {
    await axios
      .get("http://10.4.40.62:8080/vendor-service/vendor/vendors") //fake api
      .then((response) => {
        dispatch({ type: FETCH_RESTAURANTS, payload: response.data }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: error.message });
      });
  };
};
