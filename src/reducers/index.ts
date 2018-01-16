import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import users from './users';
import todos from './todos';

const rootReducers = combineReducers({
  auth,
  users,
  todos,
  form
});

export default rootReducers;