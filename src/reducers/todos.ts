import { Action } from '../actions';
import { TodoType } from '../models';
import { GET_TODOS } from '../actions/todos';

/**
 * TODO와 관련된 데이터를 처리한다.
 * @param state State 데이터
 * @param action Action 데이터
 */
function todos(state: Array<TodoType> = [], action: Action) {
  switch (action.type) {
    case GET_TODOS:
      return action.payload;
    default:
      return state;
  }
}

export default todos;
