import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

const cx = classNames.bind(styles);

interface IProps {
  action: string;
  onChangeAction(): void;
}

const Public: React.SFC<IProps> = props => (
  <div className={cx('auth')}>
    {props.action === 'login' && (
      <div>
        <LoginForm />
        <p>
          <span>Don't have an account?{' '}</span>
          <span onClick={props.onChangeAction}>Sign up</span>
        </p>
      </div>
    )}
    {props.action === 'signup' && (
      <div>
        <SignupForm />
        <p>
          <span>Have an account?{' '}</span>
          <span onClick={props.onChangeAction}>Log in</span>
        </p>
      </div>
    )}
  </div>
);

export default Public;
