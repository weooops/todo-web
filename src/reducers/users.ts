import { Action } from '../actions';
import { GET_USERS } from '../actions/users';

function users(state: Array<any> = [], action: Action<any>) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}

export default users;
