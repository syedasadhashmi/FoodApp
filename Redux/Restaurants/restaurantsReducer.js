import { FETCH_RESTAURANTS } from "./restaurantsTypes";
const initialState = { restaurants: [] };

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        restaurants: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantsReducer;
