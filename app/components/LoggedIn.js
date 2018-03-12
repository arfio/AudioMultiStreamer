import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Settings, Button, ContentAdd } from 'mdi-material-ui';
import { Link } from 'react-router-dom';

let styles = theme => ({
  drawerPaper: {
    width: 180,
    marginTop: 80,
    marginLeft: 190,
    paddingTop: 65,
    background: theme.palette.primary.light,
  },
});

class LoggedIn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.drawerPaper}>
        <h2>Logged in as {this.props.user.username}</h2>
        <Settings/>
        <Link to="/settings"> dsadsad </Link>
      </div>
    );
  }
}
export default withStyles(styles)(LoggedIn);