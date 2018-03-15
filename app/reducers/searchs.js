import { handleActions } from "redux-actions";
import { getAllFuncs } from "../utils/metautils";
import apis from "../utils/apis";
import actionList from "../actions/actionList";

export default handleActions({
  [actionList.search]: (state, action) => {
    Object.keys(apis).forEach((element) => {
      console.log(getAllFuncs(apis[element]));
    });
    const apiList = Object.keys(apis).reduce((previous, current) => {
      // console.log(apis[previous])
      // console.log(apis[current]);
      if (apis[current].hasOwnProperty('searchMusic')) {
        previous = new Array( ...apis[previous], apis[current].searchMusic(action.query));
      }
      return previous;
    });
    console.log(apiList);
    // apiList.forEach((api) => {
    //   console.log(api.searchMusic());
    // });
    return { ...state, ...action.payload };
  }
}, {});
