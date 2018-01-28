import { Action } from '../actions';
import { ErrorType } from '../models';
import { ERROR_LOGIN, ERROR_SIGNUP, ERROR_COMMON } from '../actions/error';

const initialState: ErrorType = {
  login: null,
  signup: null,
  common: null
};

/**
 * 데이터 통신 시 에러 처리
 * @param state State 데이터
 * @param action Action 데이터
 */
function error(state: ErrorType = initialState, action: Action) {
  switch (action.type) {
    case ERROR_LOGIN:
      return {
        login: {
          message: action.payload
        }
      };
    case ERROR_SIGNUP:
      return {
        signup: {
          message: action.payload
        }
      };
    case ERROR_COMMON:
      return {
        common: {
          message: 'I\'m sorry, I have a problem with the server!'
        }
      };
    default:
      return state;
  }
}

export default error;
