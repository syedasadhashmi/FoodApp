import axios from 'axios';
import {
  FETCH_MENU,
  FETCH_MENU_FAILURE,
  DELETE_MENUGROUP_ROW,
} from './menuTypes';
import { apiUrl } from '../../utils/constant';
import data2 from './data2.json';

export const fetchMenu = (id) => {
  const token = localStorage.getItem('tokenDetails');

  console.log(id);
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/vendor-service/menuGroup/restaurant?vendorId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) //fake api
      .then((response) => {
        dispatch({ type: FETCH_MENU, payload: response, id: id }); //directly passing data from data.json
      })
      .catch((error) => {
        dispatch({ type: FETCH_MENU_FAILURE, payload: error.message });
      });
  };
};
export const deleteMenuGroupRow = (id) => {
  return {
    type: DELETE_MENUGROUP_ROW,
    payload: id,
  };
};
