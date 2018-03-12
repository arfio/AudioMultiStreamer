import React from 'react';
import { Switch, Route } from 'react-router';
import { withStyles } from 'material-ui/styles';
import LoginPage from '../containers/LoginPage';
import LoggedInPage from '../containers/LoggedInPage';
import SettingsPage from '../containers/SettingsPage';


let styles = theme => ({
  page: {
    marginTop: 64,
    marginLeft: 180,
    height: "100%",
    background: theme.palette.secondary.light
  }
});

class Routes extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/loggedin" component={LoggedInPage} />
        </Switch>
      </div>
    );
  }
}
export default withStyles(styles)(Routes);