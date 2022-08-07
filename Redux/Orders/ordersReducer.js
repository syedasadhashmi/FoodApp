import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_ERROR,
} from './ordersTypes';
const initialState = {
  pendingOrders: [],
  pendingOrdersError: '',
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING_ORDERS:
      return {
        pendingOrders: action.payload,
      };
    case FETCH_PENDING_ORDERS_ERROR:
      return {
        pendingOrders: [],
        pendingOrdersError: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default ordersReducer;
