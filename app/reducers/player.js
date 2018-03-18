import { handleActions } from "redux-actions";
import { getAllFuncs } from "../utils/metautils";
import apis from "../utils/apis";
import actionList from "../actions/actionList";

export default handleActions({
  [actionList.playPending]: (state, action) => {
    console.log("PLAY");
    return {...state};
  }
}, {});
