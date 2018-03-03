import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { i18nState } from 'redux-i18n';

import { AuthType, TodoType, ErrorType } from '../models';
import auth from './auth';
import todos from './todos';
import error from './error';

export type State = {
  auth: AuthType;
  todos: Array<TodoType>;
  error: ErrorType;
};

const appReducer = combineReducers({
  auth, todos, form, error, i18nState
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
