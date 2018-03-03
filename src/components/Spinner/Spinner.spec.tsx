import * as React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

it('renders correctly', () => {
  const wrapper = shallow(<Spinner />);
  expect(wrapper).toMatchSnapshot();
});
