import { combineReducers } from 'redux';
import login from './login';
import token from './token';
import quiz from './quiz';
import timeout from './timeout';
import categories from './categories';
import searchParams from './searchParams';

const rootReducer = combineReducers({
  categories,
  login,
  searchParams,
  timeout,
  token,
  quiz,
});

export default rootReducer;
