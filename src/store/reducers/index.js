import { combineReducers } from "redux";
import location from "./location";
import weather from "./weather";

const rootReducer = combineReducers({ location, weather });

export default rootReducer;
