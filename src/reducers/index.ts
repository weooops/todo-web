import { combineReducers, Reducer } from 'redux';
import { reducer as form } from 'redux-form';

import { AuthType, TodoType, ErrorType } from '../models';
import auth from './auth';
import todos from './todos';
import error from './error';

export type State = {
  auth: AuthType;
  todos: Array<TodoType>;
  error: ErrorType;
};

const rootReducers: Reducer<State> = combineReducers({
  auth, todos, form, error
});

export default rootReducers;
