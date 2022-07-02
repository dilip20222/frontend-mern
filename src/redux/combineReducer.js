import { combineReducers } from "@reduxjs/toolkit";
import auth from "./user/index";

const rootReducer = combineReducers({auth});

export default rootReducer;