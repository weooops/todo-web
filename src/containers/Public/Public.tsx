import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
// import LoginForm from '../LoginForm';
import LoginForm from '../LoginForm/Login';
// import SignupForm from '../SignupForm';
import SignupForm from '../SignupForm/Signup';

const cx = classNames.bind(styles);

interface IProps {
  action: string;
  onChangeAction(): void;
}

const Public: React.SFC<IProps> = (props, context) => (
  <div className={cx('public')}>
    {props.action === 'login' && (
      <div>
        <LoginForm />
        <p className={cx('text')}>
          <span>{context.t('Don\'t have an Account?')}{' '}</span>
          <span className={cx('change-link')} onClick={props.onChangeAction}>{context.t('Sign Up')}</span>
        </p>
      </div>
    )}
    {props.action === 'signup' && (
      <div>
        <SignupForm />
        <p className={cx('text')}>
          <span>{context.t('Already have an Account?')}{' '}</span>
          <span className={cx('change-link')} onClick={props.onChangeAction}>{context.t('Log In')}</span>
        </p>
      </div>
    )}
  </div>
);

Public.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Public;
