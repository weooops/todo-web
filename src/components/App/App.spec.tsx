import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders correctly', () => {
  const props = {
    isLoggedIn: true
  };
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toMatchSnapshot();
});