import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, Paper, Button, IconButton, Table,
  TableBody, TableCell, TableHead, TableRow } from "material-ui";
import { withStyles } from "material-ui/styles";
import { Play, PlaylistPlus } from "mdi-material-ui";

const styles = theme => ({
  root: {
    margin: "auto",
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class MusicTable extends Component {
  formatTime(duration) {
    const formattedTime = ("00" + Math.floor(duration / 60).toString()).slice(-2) + ":" +
      ("00" + (duration % 60).toString()).slice(-2);
    if (duration > 3600)
      return ("00" + Math.floor(duration / 3600).toString()).slice(-2) + ":" +
        formattedTime;
    return formattedTime;
  }

  render() {
    const { classes, tracks } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell padding="checkbox">Track title</TableCell>
              <TableCell padding="checkbox">Author</TableCell>
              <TableCell numeric>Duration</TableCell>
              <TableCell padding="checkbox">Add to playlist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tracks.map(t => {
              return (
                <TableRow key={t.musicId}>
                  <TableCell padding="checkbox">
                    <IconButton aria-label="Play/pause" onClick={() => this.props.play(t)}>
                      <Play/>
                    </IconButton>
                  </TableCell>
                  <TableCell padding="checkbox">{t.title}</TableCell>
                  <TableCell padding="checkbox">{t.author}</TableCell>
                  <TableCell numeric>{this.formatTime(t.duration)}</TableCell>
                  <TableCell padding="checkbox">
                    <IconButton>
                      <PlaylistPlus/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
MusicTable.propTypes = {
  tracks: PropTypes.array.isRequired,
  play: PropTypes.func.isRequired
};

export default withStyles(styles)(MusicTable);