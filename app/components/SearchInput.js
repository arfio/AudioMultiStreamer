import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { TextField } from "material-ui";

const styles = theme => ({
});

class SearchInput extends Component {
  render() {
    return (
      <div>
        <TextField
          id="searchfield"
          label="Search"
          value={this.props.query}
          onKeyDown={(e) => {if (e.key == "Enter") this.props.handleSearch(e)}}
          margin="normal"
        />
      </div>
    );
  }
}
SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default withStyles(styles)(SearchInput);