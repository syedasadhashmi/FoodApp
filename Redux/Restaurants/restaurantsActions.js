import { FETCH_RESTAURANTS } from "./restaurantsTypes";
export const fetchRestaurants = (data) => {
  console.log("action");
  return {
    type: FETCH_RESTAURANTS,
    payload: data,
  };
};
