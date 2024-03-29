import axios from 'axios';
import {
  FETCH_MENU_DISHES,
  FETCH_MENU_DISHES_FAILURE,
  DELETE_MENU_ITEMS,
} from './menuDishesTypes';
import data3 from './data3.json';
import { apiUrl } from '../../utils/constant';

export const fetchMenuDishes = (id) => {
  const token = localStorage.getItem('tokenDetails');

  console.log(id);
  return async (dispatch) => {
    await axios
      // http://10.4.41.213:8080/vendor-service/menuGroup/restaurant?vendorId=${id}

      .get(`${apiUrl}/vendor-service/catalogItem/menuGroup?menuGroupId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) //fake api
      .then((response) => {
        dispatch({ type: FETCH_MENU_DISHES, payload: response, id: id }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_MENU_DISHES_FAILURE, payload: error.message });
      });
  };
};
export const deleteMenuItems = (id) => {
  return {
    type: DELETE_MENU_ITEMS,
    payload: id,
  };
};
