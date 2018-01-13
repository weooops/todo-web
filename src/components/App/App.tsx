import * as React from 'react';

import * as styles from './styles.scss';
import { UserType, TodoType } from '../../models';
import Loading from '../Loading';
import UserList from '../UserList';
import TodoList from '../TodoList';

export interface PropsType {
  users: Array<UserType>;
  todos: Array<TodoType>;
  loading: boolean;
  input: string;
  onInputChange(e: React.FormEvent<HTMLInputElement>): void;
}

const App: React.SFC<PropsType> = props => {
  if (props.loading) {
    return <Loading />;
  }
  return <Render {...props} />;
};

const Render: React.SFC<PropsType> = props => (
  <div className={styles.app}>
    <div className={styles.header}>
      <input onChange={props.onInputChange} value={props.input} />
    </div>
    <h2 className={styles.darkGray}>USER 목록</h2>
    <div>
      <UserList users={props.users} />
    </div>
    <h2 className={styles.lightGray}>TODO 목록</h2>
    <div>
      <TodoList todos={props.todos} />
    </div>
  </div>
);

export default App;