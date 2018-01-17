import { LogoutAction, SaveTokenAction } from './auth';
import { GetTodosAction } from './todos';

export const API_URL = process.env.NODE_ENV === 'production' ? 'https://todo-api.ooops.kr' : 'http://localhost:3001';

export type Action = LogoutAction | SaveTokenAction | GetTodosAction;
