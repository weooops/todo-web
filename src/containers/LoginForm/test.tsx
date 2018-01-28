import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  reduxForm, Field, InjectedFormProps, BaseFieldProps, WrappedFieldProps,
  startSubmit, stopSubmit
} from 'redux-form';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { Action } from '../../actions';
import { State } from '../../reducers';
import * as authActions from '../../actions/auth';
import Spinner from '../../components/Spinner';

const cx = classNames.bind(styles);

interface ILoginFormProps {
  loginfield: string;
  password: string;
}

interface IProps extends ILoginFormProps, InjectedFormProps {
  loginError: { message: string; } | null;
  fieldLogin(loginfield: string, password: string, callback: Function): void;
  setSubmittingState(form: string, submitting: boolean): void;
}

class LoginForm extends React.Component<IProps> {
  shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.loginfield !== this.props.loginfield ||
      nextProps.password !== this.props.password ||
      nextProps.loginError !== this.props.loginError ||
      nextProps.pristine !== this.props.pristine ||
      nextProps.submitting !== this.props.submitting;
  }

  render() {
    const { handleSubmit, pristine, submitting, loginError } = this.props;

    return (
      <div className={cx('login')}>
        <div className={cx('logo-container')}>
          <img src={require('../../assets/images/steak.svg')} alt="logo" style={{ width: '120px' }} />
        </div>
        <form className={cx('form')} onSubmit={handleSubmit(this._handleSubmit)}>
          <Field
            className={cx('input')}
            type="text"
            label="Username or Email"
            name="loginfield"
            component={this._renderInputField}
          />
          <Field
            className={cx('input')}
            type="password"
            label="Password"
            name="password"
            component={this._renderInputField}
          />
          {loginError && (
            <div className={cx('error')}>
              <strong className={cx('message')}>{loginError.message}</strong>
            </div>
          )}
          <div>
            <button className={cx('button-login')} type="submit" disabled={pristine || submitting}>
              {submitting ? <Spinner /> : 'LOG IN'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  private _renderInputField:
    React.SFC<BaseFieldProps & WrappedFieldProps & { className: string; type: string; }> = (fieldProps) => {
    const { className, input, label, type, meta: { touched, error, warning } } = fieldProps;
    const imgFileName = input.name === 'loginfield' ? 'ic-user' : 'ic-lock-copy';

    return (
      <div>
        <div className={cx('form-control')}>
          <img className={cx('img')} src={require(`../../assets/images/${imgFileName}.svg`)} />
          <input className={className} {...input} placeholder={label} type={type} />
        </div>
        <div className={cx('error-control')}>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }

  private _handleSubmit = (values: ILoginFormProps) => {
    const { loginfield, password } = values;
    const { fieldLogin } = this.props;

    this.props.setSubmittingState('login', true);
    fieldLogin(loginfield, password, () => {
      this.props.setSubmittingState('login', false);
    });
  }

}

const validate = (values: ILoginFormProps) => {
  const errors: any = {};

  if (!values.loginfield) {
    errors.loginfield = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 4) {
    errors.password = 'Must be greater than 3 characters';
  }

  return errors;
};

const mapStateToProps = (state: State) => {
  const { error } = state;
  return {
    loginError: error.login
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  fieldLogin: (loginfield: string, password: string, callback: Function) => {
    dispatch(authActions.fieldLogin(loginfield, password, callback));
  },
  setSubmittingState: (form: string, isSubmitting: boolean) => {
    if (isSubmitting === true) {
        dispatch(startSubmit(form));
    } else if (isSubmitting === false) {
        dispatch(stopSubmit(form));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'login',
    validate
  })(LoginForm) as any
);
