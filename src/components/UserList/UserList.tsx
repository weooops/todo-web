import * as React from 'react';

import * as styles from './UserList.scss';
import { UserType } from '../../models/user';
import User from '../User';

interface PropsType {
  users: Array<UserType>;
}

class UserList extends React.Component<PropsType> {
  public shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.users !== this.props.users;
  }

  public render(): JSX.Element {
    console.log('UserList가 렌더링되고 있어요.');

    return (
      <div className={styles.userList}>
        <div className={styles.darkcyan}>
          {this._renderUsers()}
        </div>
      </div>
    );
  }

  private _renderUsers(): Array<JSX.Element> {
    const { users } = this.props;
    return users.map(user => (
      <User key={user.id} user={user} />
    ));
  }
}

export default UserList;