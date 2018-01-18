import * as React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import configureStore from '../../configureStore';
import Container from './container';

const store = configureStore();

const props = {
  todos: [
    { id: 1, title: 'a', message: 'aa' },
    { id: 2, title: 'b', message: 'bb' },
    { id: 3, title: 'c' }
  ],
  getTodos: action('getTodos')
};
const component = <Container {...props} />;

storiesOf('Private', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => component);
