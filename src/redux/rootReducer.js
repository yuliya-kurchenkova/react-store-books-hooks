import { combineReducers } from "redux";
import { cartReducers } from "./reducers/CartReducers";

export const rootReducer = combineReducers({
    cart: cartReducers,
})