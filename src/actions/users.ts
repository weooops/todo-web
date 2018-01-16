import axios from 'axios';
import { Dispatch } from 'react-redux';

import { Action } from './';
import { UserType } from '../models';

export const GET_USERS = 'GET_USERS';

export function getUsers(): Dispatch<Action<Array<UserType>>> {
  return (dispatch: Dispatch<Action<Array<UserType>>>): void => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        dispatch({
          type: GET_USERS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('error', error.response);
      });
  };
}
