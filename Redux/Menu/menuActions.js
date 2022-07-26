import axios from 'axios';
import { FETCH_MENU, FETCH_MENU_FAILURE } from './menuTypes';
import data2 from './data2.json';

export const fetchMenu = () => {
  return async (dispatch) => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users') //fake api
      .then((response) => {
        dispatch({ type: FETCH_MENU, payload: data2 }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_MENU_FAILURE, payload: error.message });
      });
  };
};
