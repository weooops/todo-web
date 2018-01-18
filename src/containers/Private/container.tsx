import * as React from 'react';

import { TodoType } from '../../models/';
import Private from './Private';

interface IProps {
  todos: Array<TodoType>;
  getTodos(): void;
}

interface IStates {
  loading: boolean;
}

class Container extends React.Component<IProps, IStates> {
  public state: IStates = {
    loading: true
  };

  public componentDidMount(): void {
    const { todos, getTodos } = this.props;

    if (todos.length) {
      this.setState({ loading: false });
    } else {
      getTodos();
    }
  }

  public componentWillReceiveProps(nextProps: IProps): void {
    if (nextProps.todos.length) {
      this.setState({ loading: false });
    }
  }

  public render(): JSX.Element {
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
