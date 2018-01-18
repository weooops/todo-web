import * as React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

it('renders correctly', () => {
  const props = {
    loginfield: '',
    password: '',
    handleInputChange: jest.fn(),
    handleSubmit: jest.fn()
  };
  const wrapper = shallow(<LoginForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});
