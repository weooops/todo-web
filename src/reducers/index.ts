import { combineReducers, Reducer } from 'redux';

import users from './users';

const rootReducers: Reducer<any> = combineReducers({
  users
});

export default rootReducers;