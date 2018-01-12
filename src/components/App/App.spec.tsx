import * as React from 'react';
import { shallow } from 'enzyme';

import App, { PropsType } from './App';

it('renders correctly', () => {
  const props: PropsType = {
    users: [
      { id: 1, username: 'jake' },
      { id: 1, username: 'jason' }
    ],
    loading: false,
    input: 'test',
    onInputChange: jest.fn(),
    todos: [
      { id: 1, title: 'a', message: 'aa' },
      { id: 2, title: 'b', message: 'bb' },
      { id: 3, title: 'c' }
    ]
  };
  
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toMatchSnapshot();
});