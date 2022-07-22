import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantsReducer from "./Redux/Restaurants/restaurantsReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
const root = combineReducers({
  restaurantsReducer: restaurantsReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
