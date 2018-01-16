import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { TodoType } from '../../models';
import Loading from '../Loading';
import TodoList from '../TodoList';

const cx = classNames.bind(styles);

export interface PropsType {
  todos: Array<TodoType>;
  loading: boolean;
}

const App: React.SFC<PropsType> = props => {
  if (props.loading) {
    return <Loading />;
  }
  return <Render {...props} />;
};

const Render: React.SFC<PropsType> = props => (
  <div className={cx('unauth')}>
    <h2>TODO 목록</h2>
    <div>
      <TodoList todos={props.todos} />
    </div>
  </div>
);

export default App;
