import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Axios from 'axios';
import Search from '../components/Search';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const clientId = "";
  return {
    onSearch: (query) => {
      const https = require('https');
      Axios.get("https://api.jamendo.com/v3.0/tracks/?"
        + "client_id=" + clientId + "&format=jsonpretty&limit=2&"
        + "namesearch=" + query
      ).then(res => {
        console.log(res.data);
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
