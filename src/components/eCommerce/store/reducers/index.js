import { combineReducers } from "redux";
import loadReducer from "./loadReducer";

const ecommerceReducer = combineReducers({
    loadReducer,
});

export default ecommerceReducer;
