import axios from 'axios';
import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_FAILURE,
} from './restaurantsTypes';
export const fetchRestaurants = () => {
  return async (dispatch) => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users') //fake api
      .then((response) => {
        dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: error.message });
      });
  };
};
