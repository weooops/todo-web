import * as React from 'react';
import { shallow } from 'enzyme';

import Private from './Private';

it('renders correctly', () => {
  const props = {
    loading: false,
    todos: [
      { id: 1, title: 'a', message: 'aa', updatedAt: '2018-01-28 06:52:05' },
      { id: 2, title: 'b', message: 'bb', updatedAt: '2018-01-28 06:52:05' },
      { id: 3, title: 'c', message: 'cc', updatedAt: '2018-01-28 06:52:05' }
    ]
  };
  const wrapper = shallow(<Private {...props} />);
  expect(wrapper).toMatchSnapshot();
});
