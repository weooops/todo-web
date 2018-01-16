import { connect } from 'react-redux';

import { AuthType } from '../../models';
import Container from './container';

interface StateToPropsType {
  auth: AuthType;
}

interface ReturnStateToPropsType {
  isLoggedIn: boolean;
}

const mapStateToProps = (state: StateToPropsType): ReturnStateToPropsType => {
  const { auth } = state;
  return {
    isLoggedIn: auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);
