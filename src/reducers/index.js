import { combineReducers } from 'redux';
import login from './login';
import token from './token';
import timeout from './timeout';

const rootReducer = combineReducers({
  login,
  timeout,
  token,
});

export default rootReducer;
