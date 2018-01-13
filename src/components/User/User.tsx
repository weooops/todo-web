import * as React from 'react';

import * as styles from './styles.scss';
import { UserType } from '../../models';

interface PropsType {
  user: UserType;
}

class User extends React.Component<PropsType> {
  shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.user !== this.props.user;
  }

  render(): JSX.Element {
    const { user: { username } } = this.props;
    
    return (
      <div className={styles.user}>
        {username}
      </div>
    );
  }
}

export default User;