import { createAction } from "redux-actions";

export default {
  searchPending: createAction("SEARCH_PENDING"),
  searchSuccess: createAction("SEARCH_SUCCESS"),
  playPending: createAction("PLAY_PENDING"),
  playSuccess: createAction("PLAY_SUCCESS")
};
