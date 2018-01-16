import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf } from '@storybook/react';
// import { getUsers } from '../../actions/users';
// import { getTodos } from '../../actions/todos';

import App from './';

const appFactory = (initialState: any) => (
  (store) => (
    <Provider store={store}>
      <App />
    </Provider>
  )
)(initialState);

storiesOf('Temp', module)
  .add('default', () => {
    const rootReducer = combineReducers({
      todos: (state = []) => state,
      users: (state = []) => state
    });
    const store = createStore(rootReducer);
    // store.dispatch(getUsers());
    // store.dispatch(getTodos());
    const storyFactory = () => appFactory(store);
    return storyFactory();
  });
