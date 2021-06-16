import { combineReducers } from 'redux';
import login from './login';
import token from './token';
import quiz from './quiz';
import timeout from './timeout';

const rootReducer = combineReducers({
  login,
  timeout,
  token,
  quiz,
});

export default rootReducer;
