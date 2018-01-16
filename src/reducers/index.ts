import { combineReducers, Reducer } from 'redux';
import { reducer as form } from 'redux-form';

import { AuthType, TodoType } from '../models';
import auth from './auth';
import todos from './todos';

export type State = {
  auth: AuthType,
  todos: Array<TodoType>
};

const rootReducers: Reducer<State> = combineReducers({
  auth, todos, form
});

export default rootReducers;
