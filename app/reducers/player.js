import { handleActions } from "redux-actions";
import { getApi } from "../utils/apis";
import actionList from "../actions/actionList";

export default handleActions({
  [actionList.playPending]: (state, action) => {
    // Pause previous music before starting a new one.
    let player = {};
    if (Object.getOwnPropertyNames(state.track).length > 0 &&
        Object.getOwnPropertyNames(state.player).length > 0) {
      const previousApi = getApi(state.track.provider);
      player = previousApi.pauseMusic(state.player);
    }

    const api = getApi(action.payload.provider);
    api.playMusic(action.payload)
    .then((player) => {
      action.asyncDispatch(actionList.playSuccess(player));
    });
    return {...state, track: action.payload, player: player};
  },

  [actionList.playSuccess]: (state, action) => {
    return {...state, player: action.payload};
  },

  [actionList.pause]: (state, action) => {
    const api = getApi(state.track.provider);
    const player = api.pauseMusic(state.player);
    return {...state, player: player};
  },

  [actionList.resume]: (state, action) => {
    const api = getApi(state.track.provider);
    const player = api.resumeMusic(state.player);
    return {...state, player: player};
  },
}, {track: {}, player: {}});
