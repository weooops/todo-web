import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../../actions';
import { fieldLogin } from '../../actions/auth';
import Container from './container';

interface DispatchToPropsType {
  fieldLogin(loginfield: string, password: string): void;
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchToPropsType => ({
  fieldLogin: (loginfield: string, password: string): void => {
    dispatch(fieldLogin(loginfield, password));
  }
});

export default connect(null, mapDispatchToProps)(Container);
