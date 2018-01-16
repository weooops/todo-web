import { LogoutAction, SaveTokenAction } from './auth';
import { GetTodosAction } from './todos';

export type Action = LogoutAction | SaveTokenAction | GetTodosAction;
