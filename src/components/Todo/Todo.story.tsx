import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import Todo from './Todo';

storiesOf('Todo', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      todo: {
        id: 1,
        title: text('title', 'title'),
        message: text('message', 'message')
      }
    };
    return <Todo {...props} />;
  });