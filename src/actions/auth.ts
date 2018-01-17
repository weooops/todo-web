import axios from 'axios';
import { Dispatch } from 'react-redux';

import { API_URL } from './';

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOGOUT = 'LOGOUT';

export type SaveTokenAction = {
  type: 'SAVE_TOKEN';
  payload: string;
};

export type LogoutAction = {
  type: 'LOGOUT';
};

/**
 * 이메일 또는 사용자이름과 비밀번호로 로그인 한다.
 * @param loginfield 로그인 필드
 * @param password 비밀번호
 */
export function fieldLogin(loginfield: string, password: string) {
  return (dispatch: Dispatch<SaveTokenAction>): void => {
    axios
      .post(`${API_URL}/auth/login`, {
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

/**
 * 사용자이름, 이메일, 비밀번호를 이용해 회원가입을 한다.
 * @param username 사용자이름
 * @param email 이메일
 * @param password 비밀번호
 * @param comparePassword 비밀번호 확인
 */
export function createAccount(
  username: string, email: string, password: string, comparePassword: string) {
  return (dispatch: Dispatch<SaveTokenAction>): void => {
    axios
      .post(`${API_URL}/auth/registration`, {
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

/**
 * 로그아웃
 */
export function logout(): LogoutAction {
  return {
    type: LOGOUT
  };
}
