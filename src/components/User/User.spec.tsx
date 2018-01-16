import * as React from 'react';
import { shallow } from 'enzyme';

import User from './User';

it('renders correctly', () => {
  const props = {
    user: {
      id: 1,
      username: 'jake'
    }
  };
  const wrapper = shallow(<User {...props} />);
  expect(wrapper).toMatchSnapshot();
});