import { Action } from '../actions';
import { TodoType } from '../models';
import { GET_TODOS } from '../actions/todos';

function todos(state: Array<TodoType> = [], action: Action<Array<TodoType>>) {
  switch (action.type) {
    case GET_TODOS:
      return action.payload;
    default:
      return state;
  }
}

export default todos;
