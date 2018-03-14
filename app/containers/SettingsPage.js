import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import Settings from "../components/Settings";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
