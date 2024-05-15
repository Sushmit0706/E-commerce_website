import handleCart from './handleCart'
import { combineReducers } from "redux";
import authReducer from './authReducer';
const rootReducers = combineReducers({
    auth: authReducer,
    handleCart,
})
export default rootReducers