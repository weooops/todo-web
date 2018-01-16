import * as React from 'react';

import Public from './Public';

interface StateType {
  action: string;
}

class Container extends React.Component<{}, StateType> {
  public state: StateType = {
    action: 'login'
  };

  public render(): JSX.Element {
    const { action } = this.state;

    return (
      <Public
        action={action}
        onChangeAction={this._onChangeAction}
      />
    );
  }

  private _onChangeAction = (): void => {
    this.setState((prevState: StateType) => {
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
