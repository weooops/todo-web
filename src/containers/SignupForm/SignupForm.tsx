import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
  username: string;
  email: string;
  password: string;
  comparePassword: string;
  handleInputChange(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const LoginForm: React.SFC<IProps> = props => (
  <div className={cx('signup')}>
    <div className={cx('logo-container')}>
      <img src={require('../../assets/images/steak.svg')} alt="logo" style={{width: '120px'}} />
    </div>
    <form className={cx('form')} onSubmit={props.handleSubmit}>
      <div className={cx('form-control')}>
        <img className={cx('img')} src={require('../../assets/images/ic-user.svg')} />
        <input
          className={cx('input')}
          type="text"
          name="username"
          placeholder="Username"
          value={props.username}
          onChange={props.handleInputChange}
        />
      </div>
      <div className={cx('form-control')}>
      <img className={cx('img')} src={require('../../assets/images/ic-mail-copy.svg')} />
        <input
          className={cx('input')}
          type="text"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.handleInputChange}
        />
      </div>
      <div className={cx('form-control')}>
        <img className={cx('img')} src={require('../../assets/images/ic-lock-copy.svg')} />
        <input
          className={cx('input')}
          type="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChange={props.handleInputChange}
        />
      </div>
      <div className={cx('form-control')}>
        <img className={cx('img')} src={require('../../assets/images/ic-lock-copy.svg')} />
        <input
          className={cx('input')}
          type="password"
          name="comparePassword"
          placeholder="Password Confirm"
          value={props.comparePassword}
          onChange={props.handleInputChange}
        />
      </div>
      <input className={cx('button-signup')} type="submit" value="SIGN UP NOW" />
    </form>
  </div>
);

export default LoginForm;
