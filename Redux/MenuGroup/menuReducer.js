import { FETCH_MENU, FETCH_MENU_FAILURE } from "./menuTypes";
const initialState = {
  loading: false,
  fetchData: [],
  error: "",
  id: "",
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
    default:
      return {
        state,
      };
  }
};

export default menuReducer;
