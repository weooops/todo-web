import * as React from 'react';

import App from './App';

interface PropsType {
  isLoggedIn: boolean;
}

const Container: React.SFC<PropsType> = props => <App {...props} />;

export default Container;
