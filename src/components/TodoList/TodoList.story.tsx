import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import TodoList from './TodoList';

storiesOf('TodoList', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      todos: [
        { id: 1, title: text('title1', '제목1'), message: text('message1', '메시지1') },
        { id: 2, title: text('title2', '제목2'), message: text('message2', '메시지2') },
        { id: 3, title: text('title3', '제목3'), message: text('message3', '메시지3') }
      ]
    };
    return <TodoList {...props} />;
  });