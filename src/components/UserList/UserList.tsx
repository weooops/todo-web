import * as React from 'react';

import * as styles from './UserList.scss';
import { UserType } from '../App';
import User from '../User';

interface PropsType {
  users: Array<UserType>;
}

class UserList extends React.Component<PropsType, {}> {
  shouldComponentUpdate(prevProps: PropsType) {
    return prevProps.users !== this.props.users;
  }

  renderUsers() {
    const { users } = this.props;
    return users.map(user => (
      <User key={user.id} user={user} />
    ));
  }

  render() {
    console.log('UserList가 렌더링되고 있어요.');

    return (
      <div className={styles.userList}>
        <div className={styles.darkcyan}>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}

export default UserList;