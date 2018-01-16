import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface PropsType {
  username: string;
  email: string;
  password: string;
  comparePassword: string;
  handleInputChange(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const LoginForm: React.SFC<PropsType> = props => (
  <div className={cx('signup-form')}>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={props.username}
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        name="comparePassword"
        placeholder="Password Confirm"
        value={props.comparePassword}
        onChange={props.handleInputChange}
      />
      <input type="submit" value="Sign up" />
    </form>
  </div>
);

export default LoginForm;
