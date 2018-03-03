import * as React from 'react';

import Navigation from './Navigation';

interface IProps {
  logout(): void;
}

class Container extends React.Component<IProps> {
  render() {
    const { logout } = this.props;

    return (
      <Navigation
        logout={logout}
      />
    );
  }
}

export default Container;
