import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { AppBar, Button } from "material-ui";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import SC from "soundcloud";

let styles = theme => ({
});

class Settings extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  play = () => {
    SC.initialize({
      client_id: "",
      redirect_uri: "example.com/callback"
    }).then(() => {
      SC.stream("/tracks/226636929")
    }).then((player) => {
      player.play();
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>

      </div>
    );
  }
}
export default withStyles(styles)(Settings);