import * as React from 'react';

import * as styles from './App.scss';
import { UserType } from '../../models/user';
import UserList from '../UserList';

interface PropsType {
  users: Array<UserType>;
  loading: boolean;
  input: string;
  onInputChange(e: React.FormEvent<HTMLInputElement>): void;
}

const App: React.SFC<PropsType> = props => {
  console.log('App이 렌더링되고 있어요.');
  if (props.loading) {
    return <Loading />;
  }
  return <Render {...props} />;
};

const Loading: React.SFC = () => (
  <div>로딩중...</div>
);

const Render: React.SFC<PropsType> = props => (
  <div className={styles.app}>
    <div className={styles.header}>
      <input onChange={props.onInputChange} value={props.input} />
    </div>
    <h1 className={styles.blue}>사용자 목록</h1>
    <div>
      <UserList users={props.users} />
    </div>
  </div>
);

export default App;