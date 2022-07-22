import { FETCH_RESTAURANTS } from "./restaurantsTypes";
import data from "../../data.json";
export const fetchRestaurants = () => {
  console.log("action");
  return {
    type: FETCH_RESTAURANTS,
    payload: data,
  };
};
