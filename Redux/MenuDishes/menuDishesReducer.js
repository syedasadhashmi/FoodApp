import {
  FETCH_MENU_DISHES,
  FETCH_MENU_DISHES_FAILURE,
} from "./menuDishesTypes";
const initialState = {
  loading: false,
  fetchDishes: [],
  error: "",
};

const menuDishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_DISHES:
      return {
        loading: true,
        fetchDishes: action.payload,
      };
    case FETCH_MENU_DISHES_FAILURE:
      return {
        fetchDishes: [],
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default menuDishesReducer;
