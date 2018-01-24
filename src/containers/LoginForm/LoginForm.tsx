import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
  loginfield: string;
  password: string;
  handleInputChange(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const LoginForm: React.SFC<IProps> = props => (
  <div className={cx('login')}>
    <div className={cx('logo-container')}>
      <img src={require('../../assets/images/steak.svg')} alt="logo" style={{width: '120px'}} />
    </div>
    <form className={cx('form')} onSubmit={props.handleSubmit}>
      <div className={cx('form-control')}>
        <img className={cx('img')} src={require('../../assets/images/ic-user.svg')} />
        <input
          className={cx('input')}
          type="text"
          name="loginfield"
          placeholder="Username or Email"
          value={props.loginfield}
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
      <input className={cx('button-login')} type="submit" value="LOG IN" />
    </form>
  </div>
);

export default LoginForm;
