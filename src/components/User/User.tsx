import * as React from 'react';

import * as styles from './User.scss';
import { UserType } from '../../models/user';

interface PropsType {
  user: UserType;
}

class User extends React.Component<PropsType> {
  public shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.user !== this.props.user;
  }

  public render() {
    const { user: { username } } = this.props;
    console.log(`${username}가 렌더링 되고있어요.`);

    return (
      <div className={styles.user}>
        {username}
      </div>
    );
  }
}

export default User;