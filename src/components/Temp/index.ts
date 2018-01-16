import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../../actions';
import { UserType, TodoType } from '../../models';
import { getUsers } from '../../actions/users';
import { getTodos } from '../../actions/todos';
import Container from './container';

interface StateToPropsType {
  users: Array<UserType>;
  todos: Array<TodoType>;
}

interface DispatchToPropsType {
  getUsers(): void;
  getTodos(): void;
}

const mapStateToProps = (state: StateToPropsType): StateToPropsType => ({
  users: state.users,
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<Action<Array<UserType & TodoType>>>): DispatchToPropsType => ({
  getUsers: (): void => {
    dispatch(getUsers());
  },
  getTodos: (): void => {
    dispatch(getTodos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);