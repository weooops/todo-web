import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const env: string | undefined = process.env.NODE_ENV;
const middlewares: Array<any> = [thunk];

if (env === 'development') {
  console.warn('NODE_ENV', env);
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

let store;
if (env === 'development') {
  store = () =>
    createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = () =>
    createStore(rootReducer, applyMiddleware(...middlewares));
}

export default store();