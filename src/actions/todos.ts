import axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'react-redux';

import { Action } from './';
import { TodoType } from '../models';

export const GET_TODOS = 'GET_TODOS';

// tslint:disable-next-line:max-line-length
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTE1NzM2NjgwLCJleHAiOjE1MTYzNDE0ODAsImlzcyI6Im9vb3BzLmtyIiwic3ViIjoidXNlckluZm8ifQ.6NjY-XdlxrcPo4HisfQlZAT-4aJ_Bj73DOTnFLtp0po';

export function getTodos(): Dispatch<Action<Array<TodoType>>> {
  return (dispatch: Dispatch<Action<Array<TodoType>>>): void => {
    axios.get('http://localhost:3001/todos', {
        headers: {
          'Authorization': `bearer ${accessToken}`
        }
      })
      .then((response: AxiosResponse): void => {
        dispatch({
          type: GET_TODOS,
          payload: response.data
        });
      })
      .catch((error: AxiosError): void => {
        console.log(error);
      });
  };
}
