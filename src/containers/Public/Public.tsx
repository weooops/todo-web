import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
// import LoginForm from '../LoginForm';
import LoginForm from '../LoginForm/test';
// import SignupForm from '../SignupForm';
import SignupForm from '../SignupForm/test';

const cx = classNames.bind(styles);

interface IProps {
  action: string;
  onChangeAction(): void;
}

const Public: React.SFC<IProps> = props => (
  <div className={cx('public')}>
    {props.action === 'login' && (
      <div>
        <LoginForm />
        <p className={cx('text')}>
          <span>Don't have an Account?{' '}</span>
          <span className={cx('change-link')} onClick={props.onChangeAction}>Sign Up</span>
        </p>
      </div>
    )}
    {props.action === 'signup' && (
      <div>
        <SignupForm />
        <p className={cx('text')}>
          <span>Already have an Account?{' '}</span>
          <span className={cx('change-link')} onClick={props.onChangeAction}>Log In</span>
        </p>
      </div>
    )}
  </div>
);

export default Public;
