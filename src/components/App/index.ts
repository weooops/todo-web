import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getUsers } from '../../actions/users';
import { UserType } from '../../models/user';
import Container from './container';

interface StateToPropsType {
  users: Array<UserType>;
}

interface DispatchToPropsType {
  getUsers: () => void;
}

const mapStateToProps = (state: StateToPropsType): StateToPropsType => ({
  users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch<Object>): DispatchToPropsType => ({
  getUsers: () => {
    dispatch(getUsers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);