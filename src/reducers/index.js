import { combineReducers } from 'redux';
import login from './login';
import token from './token';
import quiz from './quiz';

const rootReducer = combineReducers({
  login,
  token,
  quiz,
});

export default rootReducer;
