import axios from 'axios';
import { apiUrl } from '../../utils/constant';
import {
  FETCH_ACCEPTED_ORDERS,
  FETCH_CANCELLED_ORDERS,
  FETCH_COMPLETED_ORDERS,
  FETCH_PENDING_ORDERS,
  FETCH_PREPARED_ORDERS,
  FETCH_PENDING_ORDERS_ERROR,
  FETCH_ACCEPTED_ORDERS_ERROR,
  FETCH_CANCELLED_ORDERS_ERROR,
  FETCH_PREPARED_ORDERS_ERROR,
  FETCH_COMPLETED_ORDERS_ERROR,
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
export const fetchAcceptedOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/order-service/order/admin?status=ACCEPTED`)
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_ACCEPTED_ORDERS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_ACCEPTED_ORDERS_ERROR, payload: error });
      });
  };
};
export const fetchCancelledOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/order-service/order/admin?status=CANCELLED`)
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_CANCELLED_ORDERS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_CANCELLED_ORDERS_ERROR, payload: error });
      });
  };
};
export const fetchPreparedOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/order-service/order/admin?status=PREPARED`)
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_PREPARED_ORDERS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_PREPARED_ORDERS_ERROR, payload: error });
      });
  };
};
export const fetchCompletedOrders = () => {
  return async (dispatch) => {
    await axios
      .get(`${apiUrl}/order-service/order/admin?status=COMPLETED`)
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_COMPLETED_ORDERS, payload: response });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_COMPLETED_ORDERS, payload: error });
      });
  };
};
