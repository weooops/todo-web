import * as React from 'react';

import * as styles from './App.scss';
import UserList from '../UserList';

export interface UserType {
  id: number;
  username: string;
}

interface StatesType {
  input: string;
  users: Array<UserType>;
}

class App extends React.Component<{}, StatesType> {
  id = 3;
  state = {
    input: '',
    users: [
      { id: 1, username: 'jake' },
      { id: 2, username: 'jason' }
    ]
  };

  onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    this.setState({ input: target.value });
  }

  onButtonClick = () => {
    this.setState(({ input, users }) => ({
      input: '',
      users: users.concat({
        id: this.id++,
        username: input
      })
    }));  
  }

  render() {
    console.log('App이 렌더링되고 있어요.');

    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <input onChange={this.onInputChange} value={this.state.input} />
          <button onClick={this.onButtonClick}>추가</button>
        </div>
        <h1 className={styles.blue}>사용자 목록</h1>
        <div>
          <UserList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;