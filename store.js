import { createStore, combineReducers } from "redux";
import { restaurantsReducer } from "./Redux/Restaurants/restaurantsReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  restaurantsReducer: restaurantsReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
