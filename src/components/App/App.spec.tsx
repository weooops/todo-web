import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App component contains an element with container css class', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App')).toHaveLength(1);
});