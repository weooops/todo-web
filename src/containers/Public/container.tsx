import * as React from 'react';

import Public from './Public';

interface IStates {
  action: string;
}

class Container extends React.Component<{}, IStates> {
  state: IStates = {
    action: 'login'
  };

  render(): JSX.Element {
    const { action } = this.state;

    return (
      <Public
        action={action}
        onChangeAction={this._onChangeAction}
      />
    );
  }

  private _onChangeAction = (): void => {
    this.setState((prevState: IStates) => {
      const { action } = prevState;
      if (action === 'login') {
        return { action: 'signup' };
      } else {
        return { action: 'login' };
      }
    });
  }
}

export default Container;
