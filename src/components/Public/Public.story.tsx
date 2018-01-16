import * as React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from '../../configureStore';
import Public from './';

const store = configureStore();

storiesOf('Public', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Public />);
