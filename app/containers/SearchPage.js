import React, { Component } from "react";
import { connect } from "react-redux";
import actionList from "../actions/actionList";
import SearchInput from "../components/SearchInput";

class SearchPage extends Component {
  handleSearch = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <SearchInput handleSearch={this.handleSearch}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => { dispatch(actionList.search(query)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);