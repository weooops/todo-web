import axios from 'axios';
import { Dispatch } from 'react-redux';

import { API_URL } from './';
import { TodoType } from '../models';
import { logout } from './auth';

export const GET_TODOS = 'GET_TODOS';

export type GetTodosAction = {
  type: 'GET_TODOS';
  payload: Array<TodoType>;
};

/**
 * TODO 리스트를 가져온다.
 */
export function getTodos() {
  return (dispatch: Dispatch<GetTodosAction>, getState: Function): void => {
    const state = getState();
    axios.get(`${API_URL}/todos`, {
        headers: {
          'Authorization': `bearer ${state.auth.token}`
        }
      })
      .then(response => {
        dispatch({
          type: GET_TODOS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('error', error.response);
        if (error.response.status === 401) {
          dispatch(logout());
        }
      });
  };
}
