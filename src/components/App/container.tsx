import * as React from 'react';

import { UserType } from '../../models/user';
import App from './App';

interface PropsType {
  users: Array<UserType>;
  getUsers(): void;
}

interface StateType {
  loading: boolean;
  input: string;
}

class Container extends React.Component<PropsType, StateType> {
  public state: StateType = {
    loading: true,
    input: 'mark'
  };

  public componentWillMount(): void {
    const { users, getUsers } = this.props;

    if (users.length) {
      this.setState({ loading: false });
    } else {
      getUsers();
    }
  }

  public componentWillReceiveProps(nextProps: PropsType): void {
    if (nextProps.users.length) {
      this.setState({ loading: false });
    }
  }

  public render(): JSX.Element {
    const { users } = this.props;
    const { loading, input } = this.state;

    return (
      <App
        users={users}
        loading={loading}
        input={input}
        onInputChange={this._onInputChange}
      />
    );
  }

  private _onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({ input: value });
  }
}

export default Container;
