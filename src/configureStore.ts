import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default (initialState: Object | undefined = undefined) => {
  const env: string | undefined = process.env.NODE_ENV;
  const middlewares: Array<any> = [thunk];

  if (env === 'development') {
    console.warn('NODE_ENV:', env);
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  let store: Store<any>;
  if (env === 'development') {
    store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
  } else {
    store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  }

  return store;
};
