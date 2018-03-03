import * as React from 'react';
import * as PropTypes from 'prop-types';
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
import * as errorActions from '../../actions/error';
import Spinner from '../../components/Spinner';

const cx = classNames.bind(styles);

interface ISignupFormProps {
  username: string;
  email: string;
  password: string;
  comparePassword: string;
}

interface IProps extends ISignupFormProps, InjectedFormProps {
  signupError: { message: string; } | null;
  errorReset(): void;
  createAccount(username: string, eamil: string, password: string, comparePassword: string, callback: Function): void;
  setSubmittingState(form: string, submitting: boolean): void;
}

class SignupForm extends React.Component<IProps> {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.errorReset();
  }

  shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.username !== this.props.username ||
      nextProps.email !== this.props.email ||
      nextProps.password !== this.props.password ||
      nextProps.comparePassword !== this.props.comparePassword ||
      nextProps.signupError !== this.props.signupError ||
      nextProps.pristine !== this.props.pristine ||
      nextProps.submitting !== this.props.submitting;
  }

  render() {
    const { t } = this.context;
    const { handleSubmit, pristine, submitting, signupError } = this.props;

    return (
      <div className={cx('signup')}>
        <div className={cx('logo-container')}>
          <img src={require('../../assets/images/steak.svg')} alt="logo" style={{ width: '120px' }} />
        </div>
        <form className={cx('form')} onSubmit={handleSubmit(this._handleSubmit)}>
          <Field
            className={cx('input')}
            type="text"
            label={t('Username')}
            name="username"
            component={this._renderInputField}
          />
          <Field
            className={cx('input')}
            type="text"
            label={t('Email')}
            name="email"
            component={this._renderInputField}
          />
          <Field
            className={cx('input')}
            type="password"
            label="password"
            name="password"
            component={this._renderInputField}
          />
          <Field
            className={cx('input')}
            type="password"
            label={t('Password Confirm')}
            name="comparePassword"
            component={this._renderInputField}
          />
          {signupError && (
            <div className={cx('error')}>
              <strong className={cx('message')}>{t(signupError.message)}</strong>
            </div>
          )}
          <div>
            <button className={cx('button-signup')} type="submit" disabled={pristine || submitting}>
              {submitting ? <Spinner /> : t('SIGN UP NOW')}
            </button>
          </div>
        </form>
      </div>
    );
  }

  private _renderInputField:
    React.SFC<BaseFieldProps & WrappedFieldProps & { className: string; type: string; }> = (fieldProps) => {
    const { t } = this.context;
    const { className, input, label, type, meta: { touched, error, warning } } = fieldProps;
    let imgFileName = 'ic-lock-copy'; // includes (password, comparePassword)
    if (input.name === 'username') {
      imgFileName = 'ic-user';
    } else if (input.name === 'email') {
      imgFileName = 'ic-mail-copy';
    }

    return (
      <div>
        <div className={cx('form-control')}>
          <img className={cx('img')} src={require(`../../assets/images/${imgFileName}.svg`)} />
          <input className={className} {...input} placeholder={label} type={type} />
        </div>
        <div className={cx('error-control')}>
          {touched && ((error && <span>{t(error)}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }

  private _handleSubmit = (values: ISignupFormProps) => {
    const { username, email, password, comparePassword } = values;
    const { createAccount } = this.props;

    this.props.setSubmittingState('signup', true);
    createAccount(username, email, password, comparePassword, () => {
      this.props.setSubmittingState('signup', false);
    });
  }

}

const validate = (values: ISignupFormProps) => {
  const errors: any = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 4) {
    errors.password = 'Must be greater than 3 characters';
  }

  if (!values.comparePassword) {
    errors.comparePassword = 'Required';
  } else if (values.comparePassword.length < 4) {
    errors.comparePassword = 'Must be greater than 3 characters';
  }

  if (values.password !== values.comparePassword) {
    errors.comparePassword = 'Password not matched';
  }

  return errors;
};

const mapStateToProps = (state: State) => {
  const { error } = state;
  return {
    signupError: error.signup
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  errorReset: () => {
    dispatch(errorActions.errorReset());
  },
  createAccount: (username: string, email: string, password: string, comparePassword: string, callback: Function) => {
    dispatch(authActions.createAccount(username, email, password, comparePassword, callback));
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
    form: 'signup',
    validate
  })(SignupForm) as any
);
