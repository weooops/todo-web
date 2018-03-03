import * as React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

it('renders correctly', () => {
  const props = {
    todos: [
      { id: 1, title: '제목1', message: '메시지1', updatedAt: '2018-01-28 06:52:05' },
      { id: 2, title: '제목2', message: '메시지2', updatedAt: '2018-01-28 06:52:05' },
      { id: 3, title: '제목3', message: '메시지3', updatedAt: '2018-01-28 06:52:05' }
    ]
  };
  const wrapper = shallow(<TodoList {...props} />);
  expect(wrapper).toMatchSnapshot();
});
