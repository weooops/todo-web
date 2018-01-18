import * as React from 'react';
import { shallow } from 'enzyme';

import Public from './Public';

it('renders correctly', () => {
  const props = {
    action: 'login',
    onChangeAction: jest.fn()
  };
  const wrapper = shallow(<Public {...props} />);
  expect(wrapper).toMatchSnapshot();
});
