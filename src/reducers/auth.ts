import { Action } from '../actions';
import { AuthType } from '../models';
import { SAVE_TOKEN, LOGOUT } from '../actions/auth';

const initialState: AuthType = {
  isLoggedIn: localStorage.getItem('jwt') ? true : false,
  token: localStorage.getItem('jwt')
};

function auth(state: AuthType = initialState, action: Action<string>) {
  switch (action.type) {
    case SAVE_TOKEN:
      const { payload } = action;
      localStorage.setItem('jwt', payload);

      return {
        ...state,
        isLoggedIn: true,
        token: payload
      };
    case LOGOUT:
      localStorage.removeItem('jwt');

      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default auth;
