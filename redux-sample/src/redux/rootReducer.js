import { combineReducers } from "redux";
import { count } from "./count/reducer";

// reducerをまとめる、現状はひとつ
export const rootReducer = combineReducers({ count });
