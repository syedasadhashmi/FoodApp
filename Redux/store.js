import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantsReducer from "./Restaurants/restaurantsReducer";
import menuReducer from "./MenuGroup/menuReducer";
import menuDishesReducer from "./MenuDishes/menuDishesReducer";
import loginReducer from "./Login/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const root = combineReducers({
  restaurantsReducer: restaurantsReducer,
  menuReducer: menuReducer,
  menuDishesReducer: menuDishesReducer,
  loginReducer: loginReducer,
});
const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;
