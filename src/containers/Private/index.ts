import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../reducers';
import { Action } from '../../actions';
import { getTodos } from '../../actions/todos';
import Container from './container';

const mapStateToProps = (state: State) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getTodos: () => {
    dispatch(getTodos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
