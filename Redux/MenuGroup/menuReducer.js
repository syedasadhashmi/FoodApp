import {
  FETCH_MENU,
  FETCH_MENU_FAILURE,
  DELETE_MENUGROUP_ROW,
} from './menuTypes';
const initialState = {
  loading: false,
  fetchData: [],
  error: '',
  id: '',
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      console.log(action.id);
      return {
        loading: true,
        fetchData: action.payload,
        id: action.id,
      };
    case FETCH_MENU_FAILURE:
      return {
        fetchData: [],
        error: action.payload,
      };
    case DELETE_MENUGROUP_ROW:
      return {
        fetchData: state.fetchData.filter(
          (items) => items.id !== action.payload
        ),
      };
    default:
      return {
        state,
      };
  }
};

export default menuReducer;
