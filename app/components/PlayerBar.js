import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography } from "material-ui";

let styles = theme => ({
  root: {
    marginLeft: 190,
    marginRight: 10,
    marginTop: 80,
    background: theme.palette.primary.light,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    textAlign: 'center',
  },
  pageTitle: theme.typography.button,
  mainContent: {
    display: "flex",
  }
});

class PlayerBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.pageTitle}><b>Audio</b>MultiStreamer</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(PlayerBar);