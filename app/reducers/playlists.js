import { handleActions } from "redux-actions";
import Store from "electron-store";
import actionList from "../actions/actionList";

export default handleActions({
  [actionList.createPlaylist]: (state, action) => {
    store = new Store();
    if (!store.has("playlists." + action.payload)) {
      store.set("playlists." + action.payload, []);
    }
    return { ...state, playlists: store.get("playlists") };
  },

  [actionList.addRemoveTrackPlaylist]: (state, action) => {
    store = new Store();
    const [ track, playlist ] = action.payload;
    let trackList = store.get("playlists." + playlist);
    // Delete from playlist
    if (state.playlists[playlist].find(t => t.musicId === track.musicId)) {
      trackList = trackList.filter(t => {
        t.musicId === track.musicId});
    // Add to playlist
    } else {
      trackList.push(track);
    }
    store.set("playlists." + playlist, trackList);
    return { ...state, playlists: store.get("playlists") };
  },

  [actionList.deletePlaylist]: (state, action) => {
    store = new Store();
    if (store.has("playlists." + action.payload)) {
      store.delete("playlists." + action.payload);
    }
    return { ...state, playlists: store.get("playlists"),
      currentDisplayedPlaylist: 0 };
  },

  [actionList.playPlaylist]: (state, action) => {
    return {
      ...state,
      currentPlaylist: state.currentDisplayedPlaylist,
      currentTrack: action.payload };
  },

  [actionList.selectPlaylist]: (state, action) => {
    return { ...state, currentDisplayedPlaylist: action.payload };
  },

  [actionList.next]: (state, action) => {
    const currentPlaylist = state.playlists[Object.keys(state.playlists)[state.currentPlaylist]];
    console.log("NEXT CURRENTPLAYLIST:", currentPlaylist);
    let nextTrack = state.currentTrack + 1;
    if (state.currentTrack >= currentPlaylist.length) {
      nextTrack = 0;
    }
    console.log("DISPATCH NEXT TRACK", currentPlaylist[nextTrack]);
    action.asyncDispatch(
      actionList.playPending(currentPlaylist[nextTrack])
    );
    return { ...state, currentTrack: nextTrack };
  },

  [actionList.previous]: (state, action) => {
    // TODO
  },
}, {
  playlists: {},
  currentDisplayedPlaylist: 0,
  currentPlaylist: 0,
  currentTrack: 0,
});
