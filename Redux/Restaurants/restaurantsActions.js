import axios from 'axios';
import data from './data.json';
import { apiUrl } from '../../utils/constant';
import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_FAILURE,
  DELETE_ROW,
} from './restaurantsTypes';
export const fetchRestaurants = () => {
  const token = localStorage.getItem('tokenDetails');
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/vendor-service/vendor/vendors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) //fake api
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_RESTAURANTS, payload: response }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: error });
      });
  };
};
export const deleteRow = (id) => {
  return {
    type: DELETE_ROW,
    payload: id,
  };
};
