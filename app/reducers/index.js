import { combineReducers } from "redux";
import search from "./searchs";
import player from "./player";

const rootReducer = combineReducers({
  search,
  player
});

export default rootReducer;