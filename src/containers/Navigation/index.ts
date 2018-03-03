import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../../actions';
import * as authActions from '../../actions/auth';
import Container from './container';

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  logout: () => {
    dispatch(authActions.logout());
  }
});

export default connect(null, mapDispatchToProps)(Container);
