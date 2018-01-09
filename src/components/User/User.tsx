import * as React from 'react';

import * as styles from './User.scss';
import { UserType } from '../App';

interface PropsType {
  user: UserType;
}

class User extends React.Component<PropsType, {}> {
  shouldComponentUpdate(prevProps: PropsType) {
    return prevProps.user !== this.props.user;
  }

  render() {
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