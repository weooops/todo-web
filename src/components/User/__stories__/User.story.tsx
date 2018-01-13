import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import User from '../User';

storiesOf('User', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <User user={{ id: 1, username: text('username', 'jake joo') }} />
  ));