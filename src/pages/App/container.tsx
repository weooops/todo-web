import * as React from 'react';

import App from './App';

interface IProps {
  isLoggedIn: boolean;
}

const Container: React.SFC<IProps> = props => <App {...props} />;

export default Container;
