import * as React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

it('renders correctly', () => {
  const props = {
    todo: {
      id: 1,
      title: 'title',
      message: 'message',
      updatedAt: '2018-01-28 06:52:05'
    }
  };
  const wrapper = shallow(<Todo {...props} />);
  expect(wrapper).toMatchSnapshot();
});
