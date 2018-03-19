import React, { Component } from "react";
import { connect } from "react-redux";
import Sound from "react-sound";
import { Typography, IconButton } from "material-ui";
import { Play, Pause, SkipPrevious, SkipNext } from "mdi-material-ui";
import actionList from "../actions/actionList";
import PlayerBar from "../components/PlayerBar";


class Player extends Component {
  handleResume = () => {
    this.props.resume();
  };

  handlePause = () => {
    this.props.pause();
  };

  handleNext = (track) => {
    console.log("NEXT");
  };

  handlePrev = (track) => {
    console.log("PREVIOUS");
  };

  render() {
    const { player, track } = this.props;
    return (
      <PlayerBar>
        <Sound
          url={player.path || ""}
          playStatus={player.status || Sound.status.STOPPED}
          playFromPosition={player.position || 0}
          onFinishedPlaying={this.handleNext}
          volume={10}
        />
        <Typography>
          {!track && "No music"}
          {track && track.title}
        </Typography>
        <IconButton onClick={() => this.handlePrev()}><SkipPrevious/></IconButton>
        {player.isPlaying && <IconButton onClick={() => this.handlePause()}><Pause/></IconButton>}
        {!player.isPlaying && <IconButton onClick={() => this.handleResume()}><Play/></IconButton>}
        <IconButton onClick={() => this.handleNext()}><SkipNext/></IconButton>
      </PlayerBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.index.player.player,
    track: state.index.player.track,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resume: () => { dispatch(actionList.resume()); },
    pause: () => { dispatch(actionList.pause()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);