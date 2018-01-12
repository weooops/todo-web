import { combineReducers, Reducer } from 'redux';

import users from './users';
import todos from './todos';

const rootReducers: Reducer<any> = combineReducers({
  users,
  todos
});

export default rootReducers;