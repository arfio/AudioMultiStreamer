import { handleActions } from 'redux-actions';
import actionList from '../actions/actionList';

export default handleActions({
  [actionList.search]: (state, action) => {
    return { ...state, ...action.payload };
  }
}, {});
