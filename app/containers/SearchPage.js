import React, { Component } from "react";
import { connect } from "react-redux";
import actionList from "../actions/actionList";
import SearchInput from "../components/SearchInput";
import MusicTable from "../components/MusicTable";

class SearchPage extends Component {
  handleSearch = (event) => {
    this.props.search(event.target.value);
  }

  handlePlay = (musicId) => {
    this.props.play(musicId);
  }

  render() {
    return (
      <div>
        <SearchInput handleSearch={this.handleSearch}/>
        <MusicTable tracks={this.props.tracks || Array()} play={this.handlePlay}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.index.search.query,
    tracks: state.index.search.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => { dispatch(actionList.searchPending(query)); },
    play: (musicId) => { dispatch(actionList.playPending(musicId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);