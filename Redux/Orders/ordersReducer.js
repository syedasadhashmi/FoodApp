import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_ERROR,
  FETCH_ACCEPTED_ORDERS,
  FETCH_ACCEPTED_ORDERS_ERROR,
} from './ordersTypes';
const initialState = {
  pendingOrders: [],
  pendingOrdersError: '',
  acceptedOrders: [],
  acceptedOrdersError: '',
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING_ORDERS:
      return {
        ...state,
        pendingOrders: action.payload,
      };
    case FETCH_PENDING_ORDERS_ERROR:
      return {
        pendingOrders: [],
        pendingOrdersError: action.payload,
      };
    case FETCH_ACCEPTED_ORDERS:
      console.log(action.payload);

      return {
        ...state,
        acceptedOrders: action.payload,
      };
    case FETCH_ACCEPTED_ORDERS_ERROR:
      return {
        acceptedOrdersError: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default ordersReducer;
