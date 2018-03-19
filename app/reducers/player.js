import { handleActions } from "redux-actions";
import apis from "../utils/apis";
import actionList from "../actions/actionList";

export default handleActions({
  [actionList.playPending]: (state, action) => {
    const apiList = Object.keys(apis)
    if (action.payload.provider == "SoundcloudApi") {
      apis.SoundcloudApi.playMusic(action.payload);
    } else {
      const api = apis[
        apiList.filter((apiName) => {
          return apiName == action.payload.provider
        })
      ];
      api.playMusic(action.payload);
    }
    return {...state};
  }
}, {});
