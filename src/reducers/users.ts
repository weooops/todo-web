import { Action } from '../actions';
import { UserType } from '../models';
import { GET_USERS } from '../actions/users';

function users(state: Array<UserType> = [], action: Action<Array<UserType>>) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}

export default users;
