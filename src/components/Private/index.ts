import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Action } from '../../actions';
import { TodoType } from '../../models';
import { getTodos } from '../../actions/todos';
import Container from './container';

interface StateToPropsType {
  todos: Array<TodoType>;
}

interface DispatchToPropsType {
  getTodos(): void;
}

const mapStateToProps = (state: StateToPropsType): StateToPropsType => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<Action<Array<TodoType>>>): DispatchToPropsType => ({
  getTodos: (): void => {
    dispatch(getTodos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
