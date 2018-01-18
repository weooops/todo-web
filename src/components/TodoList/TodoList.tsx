import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { TodoType } from '../../models';
import Todo from '../Todo';

const cx = classNames.bind(styles);

interface IProps {
  todos: Array<TodoType>;
}

class TodoList extends React.Component<IProps> {
  public shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.todos !== this.props.todos;
  }

  public render(): JSX.Element {
    return (
      <div className={cx('todoList')}>
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
