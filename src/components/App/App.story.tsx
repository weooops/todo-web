import * as React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from '../../configureStore';
import App from './';

const appFactory = (initialState: any) => (
  (store) => (
    <Provider store={store}>
      <App />
    </Provider>
  )
)(configureStore(initialState));

storiesOf('App', module)
  .add('loggedIn = true', () => {
    const initialState = {
      auth: {
        isLoggedIn: true
      }
    };
    const storyFactory = () => appFactory(initialState);
    return storyFactory();
  })
  .add('loggedIn = false', () => {
    const initialState = {
      auth: {
        isLoggedIn: false
      }
    };
    const storyFactory = () => appFactory(initialState);
    return storyFactory();
  });
