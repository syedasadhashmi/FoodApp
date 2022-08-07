import axios from 'axios';
import { apiUrl } from '../../utils/constant';
import {
  FETCH_ACCEPTED_ORDERS,
  FETCH_CANCELED_ORDERS,
  FETCH_COMPLETED_ORDERS,
  FETCH_PENDING_ORDERS,
  FETCH_PREPARED_ORDERS,
  FETCH_PENDING_ORDERS_ERROR,
} from './ordersTypes';
export const fetchPendingOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/order-service/order/admin?status=PENDING`)
      .then((response) => {
        dispatch({ type: FETCH_PENDING_ORDERS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_PENDING_ORDERS_ERROR, payload: error });
      });
  };
};
