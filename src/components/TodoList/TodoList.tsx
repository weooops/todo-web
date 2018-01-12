import * as React from 'react';

import * as styles from './TodoList.scss';
import { TodoType } from '../../models';
import Todo from '../Todo';

interface PropsType {
  todos: Array<TodoType>;
}

class TodoList extends React.Component<PropsType> {
  shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.todos !== this.props.todos;
  }

  render(): JSX.Element {
    return (
      <div className={styles.todoList}>
        <div className={styles.darkorange}>
          {this._renderTodos()}
        </div>
      </div>
    );
  }

  private _renderTodos(): Array<JSX.Element> {
    const { todos } = this.props;
    return todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ));
  }
}

export default TodoList;