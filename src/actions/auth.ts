import axios from 'axios';
import { Dispatch } from 'react-redux';

import { Action } from './';

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOGOUT = 'LOGOUT';

export function fieldLogin(loginfield: string, password: string): Dispatch<Action<string>> {
  return (dispatch: Dispatch<Action<string>>): void => {
    axios
      .post('http://localhost:3001/auth/login', {
        loginfield, password
      })
      .then(response => {
        if (response.data.access_token) {
          dispatch({
            type: SAVE_TOKEN,
            payload: response.data.access_token
          });
        }
      })
      .catch(error => {
        console.log('error', error.response);
      });
  };
}

export function createAccount(
  username: string, email: string, password: string, comparePassword: string): Dispatch<Action<string>> {
  return (dispatch: Dispatch<Action<string>>): void => {
    axios
      .post('http://localhost:3001/auth/registration', {
        username, email, password, comparePassword
      })
      .then(response => {
        if (response.data.access_token) {
          dispatch({
            type: SAVE_TOKEN,
            payload: response.data.access_token
          });
        }
      })
      .catch(error => {
        console.log('error', error.response);
      });
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
