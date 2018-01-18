import * as React from 'react';
import { shallow } from 'enzyme';

import Private from './Private';

it('renders correctly', () => {
  const props = {
    loading: false,
    todos: [
      { id: 1, title: 'a', message: 'aa' },
      { id: 2, title: 'b', message: 'bb' },
      { id: 3, title: 'c' }
    ]
  };
  const wrapper = shallow(<Private {...props} />);
  expect(wrapper).toMatchSnapshot();
});
