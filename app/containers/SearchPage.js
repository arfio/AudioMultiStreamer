import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import SearchInput from "../components/SearchInput";
import { JamendoApi } from "../utils/apis";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => {
      console.log(JamendoApi.searchMusic(query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
