import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { TextField } from "material-ui";

const styles = theme => ({
});

class SearchInput extends Component {
  state = {
    query: ""
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleSearch = (event) => {
    this.props.onSearch(this.state.query);
  }

  render() {
    // const { classes } = this.props;
    return (
      <div>
        <TextField
          id="searchfield"
          label="Search"
          value={this.state.query}
          onChange={this.handleChange}
          onKeyDown={(e) => {if (e.key == "Enter") this.handleSearch(e)}}
          margin="normal"
        />
      </div>
    );
  }
}
SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchInput);