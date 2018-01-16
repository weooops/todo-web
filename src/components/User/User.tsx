import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { UserType } from '../../models';

const cx = classNames.bind(styles);

interface PropsType {
  user: UserType;
}

class User extends React.Component<PropsType> {
  public shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.user !== this.props.user;
  }

  public render(): JSX.Element {
    const { user: { username } } = this.props;
    
    return (
      <div className={cx(styles.user)}>
        {username}
      </div>
    );
  }
}

export default User;