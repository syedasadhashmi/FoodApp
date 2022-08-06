import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_SUCCES,
  FETCH_RESTAURANTS_FAILURE,
  DELETE_ROW,
} from './restaurantsTypes';
const initialState = { restaurants: [], loading: false, error: '' };

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        loading: true,
        restaurants: action.payload,
      };
    // case FETCH_RESTAURANTS_SUCCES:
    //   return {
    //     loading: false,
    //     restaurants: action.payload,
    //     error: '',
    //   };
    case FETCH_RESTAURANTS_FAILURE:
      return {
        loading: false,
        restaurants: [],
        error: action.payload,
      };
    case DELETE_ROW:
      return {
        restaurants: state.restaurants.filter(
          (items) => items.id !== action.payload
        ),
      };
    default:
      return { state };
  }
};

export default restaurantsReducer;
