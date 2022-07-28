import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantsReducer from "./Restaurants/restaurantsReducer";
import menuReducer from "./MenuGroup/menuReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const root = combineReducers({
  restaurantsReducer: restaurantsReducer,
  menuReducer: menuReducer,
});
const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;
