import * as React from 'react';

import { TodoType } from '../../models/';
import Private from './Private';

interface PropsType {
  todos: Array<TodoType>;
  getTodos(): void;
}

interface StateType {
  loading: boolean;
}

class Container extends React.Component<PropsType, StateType> {
  state: StateType = {
    loading: true
  };

  componentDidMount(): void {
    const { todos, getTodos } = this.props;

    if (todos.length) {
      this.setState({ loading: false });
    } else {
      getTodos();
    }
  }

  componentWillReceiveProps(nextProps: PropsType): void {
    if (nextProps.todos.length) {
      this.setState({ loading: false });
    }
  }

  render(): JSX.Element {
    const { todos } = this.props;
    const { loading } = this.state;

    return (
      <Private
        loading={loading}
        todos={todos}
      />
    );
  }
}

export default Container;
