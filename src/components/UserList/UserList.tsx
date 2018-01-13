import * as React from 'react';

import * as styles from './styles.scss';
import { UserType } from '../../models';
import User from '../User';

interface PropsType {
  users: Array<UserType>;
}

class UserList extends React.Component<PropsType> {
  shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.users !== this.props.users;
  }

  render(): JSX.Element {
    return (
      <div className={styles.userList}>
        <div>
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