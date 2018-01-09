import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

const Welcome = ({person}: {person: string}) => (
  <h1>Welcome {person}!!!</h1>
);

storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .add('Welcome', () => <Welcome person={text('person', 'jake joo')} />);
