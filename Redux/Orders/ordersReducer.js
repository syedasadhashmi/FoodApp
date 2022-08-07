import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_ERROR,
  FETCH_ACCEPTED_ORDERS,
  FETCH_ACCEPTED_ORDERS_ERROR,
  FETCH_CANCELLED_ORDERS,
  FETCH_CANCELLED_ORDERS_ERROR,
} from './ordersTypes';
const initialState = {
  pendingOrders: [],
  pendingOrdersError: '',
  acceptedOrders: [],
  acceptedOrdersError: '',
  cancelledOrders: [],
  cancelledOrdersError: '',
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
        ...state,
        acceptedOrdersError: action.payload,
      };
    case FETCH_CANCELLED_ORDERS:
      console.log(action.payload);

      return {
        ...state,
        cancelledOrders: action.payload,
      };
    case FETCH_CANCELLED_ORDERS_ERROR:
      return {
        ...state,
        cancelledOrdersError: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default ordersReducer;
