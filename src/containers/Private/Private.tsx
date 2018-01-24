import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { TodoType } from '../../models';
import Loading from '../../components/Loading';
import TodoList from '../../components/TodoList';

const cx = classNames.bind(styles);

interface IProps {
  todos: Array<TodoType>;
  loading: boolean;
}

const App: React.SFC<IProps> = props => {
  if (props.loading) {
    return <Loading />;
  }
  return <Render {...props} />;
};

const Render: React.SFC<IProps> = props => (
  <div className={cx('private')}>
    <TodoList todos={props.todos} />
  </div>
);

export default App;
