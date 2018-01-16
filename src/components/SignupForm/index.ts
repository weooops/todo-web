import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../../actions';
import { createAccount } from '../../actions/auth';
import Container from './container';

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  createAccount: (username: string, email: string, password: string, comparePassword: string) => {
    dispatch(createAccount(username, email, password, comparePassword));
  }
});

export default connect(null, mapDispatchToProps)(Container);
