export const ERROR_LOGIN = 'ERROR_LOGIN';
export const ERROR_SIGNUP = 'ERROR_SIGNUP';
export const ERROR_COMMON = 'ERROR_COMMON';

export type ErrorLoginAction = {
  type: 'ERROR_LOGIN';
  payload: string;
};

export type ErrorSignupAction = {
  type: 'ERROR_SIGNUP';
  payload: string;
};

export type ErrorCommonAction = {
  type: 'ERROR_COMMON';
  payload: string;
};

/**
 * 로그인 에러처리
 */
export function errorLogin(payload: string): ErrorLoginAction {
  return {
    type: ERROR_LOGIN,
    payload
  };
}

/**
 * 회원가입 에러처리
 */
export function errorSignup(payload: string): ErrorSignupAction {
  return {
    type: ERROR_SIGNUP,
    payload
  };
}

/**
 * 공통 에러처리
 */
export function errorCommon(payload: string): ErrorCommonAction {
  return {
    type: ERROR_COMMON,
    payload
  };
}
