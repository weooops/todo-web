import { UserType } from '../models/user';
import { Action } from './';

export const GET_USERS = 'GET_USERS';

export function getUsers(): Action<Array<UserType>> {
  return {
    type: GET_USERS,
    payload: [
      { id: 1, username: 'jake' },
      { id: 2, username: 'jason' },
      { id: 3, username: 'zhon' },
      { id: 4, username: 'mark' }
    ]
  };
}
