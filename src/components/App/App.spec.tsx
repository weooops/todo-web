import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders correctly', () => {
  const props = {
    users: [
      { id: 1, username: 'jake' }
    ],
    loading: false,
    input: 'aaa',
    onInputChange: () => { console.log('onInputChange'); }
  };
  
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toMatchSnapshot();
});