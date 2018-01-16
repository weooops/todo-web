import axios from 'axios';
import { Dispatch } from 'react-redux';

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOGOUT = 'LOGOUT';

export type SaveTokenAction = {
  type: 'SAVE_TOKEN';
  payload: string;
};

export type LogoutAction = {
  type: 'LOGOUT';
};

export function fieldLogin(loginfield: string, password: string) {
  return (dispatch: Dispatch<SaveTokenAction>): void => {
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
  username: string, email: string, password: string, comparePassword: string) {
  return (dispatch: Dispatch<SaveTokenAction>): void => {
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

export function logout(): LogoutAction {
  return {
    type: LOGOUT
  };
}
