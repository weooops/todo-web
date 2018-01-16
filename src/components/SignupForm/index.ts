import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../../actions';
import { createAccount } from '../../actions/auth';
import Container from './container';

interface DispatchToPropsType {
  createAccount(username: string, email: string, password: string, comparePassword: string): void;
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchToPropsType => ({
  createAccount: (username: string, email: string, password: string, comparePassword: string): void => {
    dispatch(createAccount(username, email, password, comparePassword));
  }
});

export default connect(null, mapDispatchToProps)(Container);
