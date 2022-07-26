import { FETCH_MENU, FETCH_MENU_FAILURE } from './menuTypes';
const initialState = {
  loading: false,
  fetchData: [],
  error: '',
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return {
        loading: true,
        fetchData: action.payload,
      };
    case FETCH_MENU_FAILURE:
      return {
        fetchData: [],
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default menuReducer;
