import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface PropsType {
  loginfield: string;
  password: string;
  handleInputChange(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const LoginForm: React.SFC<PropsType> = props => (
  <div className={cx('login-form')}>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="loginfield"
        placeholder="username or email"
        value={props.loginfield}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={props.handleInputChange}
      />
      <input type="submit" value="Log in" />
    </form>
  </div>
);

export default LoginForm;
