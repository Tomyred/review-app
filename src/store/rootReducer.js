import { combineReducers } from "redux";
import ecommerceReducer from "../components/eCommerce/store/reducers";

const rootReducer = combineReducers({
    ecommerce: ecommerceReducer,
});

export default rootReducer;
