import { connect } from 'react-redux';

import { State } from '../../reducers';
import Container from './container';

const mapStateToProps = (state: State) => {
  const { auth } = state;
  return {
    isLoggedIn: auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);
