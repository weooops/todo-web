import * as React from 'react';

import { UserType, TodoType } from '../../models/';
import App from './App';

interface PropsType {
  users: Array<UserType>;
  todos: Array<TodoType>;
  getUsers(): void;
  getTodos(): void;
}

interface StateType {
  loading: boolean;
  input: string;
}

class Container extends React.Component<PropsType, StateType> {
  state: StateType = {
    loading: true,
    input: 'mark'
  };

  componentDidMount(): void {
    const { users, getUsers, todos, getTodos } = this.props;

    if (users.length && todos.length) {
      this.setState({ loading: false });
    } else {
      getUsers();
      getTodos();
    }
  }

  componentWillReceiveProps(nextProps: PropsType): void {
    if (nextProps.users.length && nextProps.todos.length) {
      this.setState({ loading: false });
    }
  }

  render(): JSX.Element {
    const { users, todos } = this.props;
    const { loading, input } = this.state;

    return (
      <App
        users={users}
        loading={loading}
        input={input}
        onInputChange={this._onInputChange}
        todos={todos}
      />
    );
  }

  private _onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({ input: value });
  }
}

export default Container;
