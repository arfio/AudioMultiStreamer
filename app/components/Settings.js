import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { AppBar, Button } from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SC from 'soundcloud';


let styles = theme => ({
  tabnav: {
    background: theme.palette.primary.light
  }
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
      client_id: 'g7pmPAwAmWJ8oGICV7nnp8VpdF2GdVca',
      redirect_uri: 'example.com/callback'
    });
    // SC.get('/user/183/tracks').then(function(tracks){
    //   alert('Latest track: ' + tracks[0].title);
    // });

    SC.connect().then(function() {
      return SC.get('/me');
    }).then((me) => {
      alert('Hello, ' + me.username);
    }).then(() => {
      SC.stream('/tracks/226636929')
    }).then((player) => {
      player.play();
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static" className={classes.tabnav}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Spotify"/>
            <Tab label="Deezer"/>
            <Tab label="Item Three"/>
          </Tabs>
        </AppBar>
        {value === 0 && <Typography component="div"></Typography>}
        {value === 1 && <Button onClick={this.play}> Play </Button>}
        {value === 2 && "Item Three"}
      </div>
    );
  }
}
export default withStyles(styles)(Settings);