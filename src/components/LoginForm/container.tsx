import * as React from 'react';

import LoginForm from './LoginForm';

interface PropsType {
  fieldLogin(loginfield: string, password: string): void;
}

interface StateType {
  [key: string]: string;
}

class Container extends React.Component<PropsType, StateType> {
  public state: StateType = {
    loginfield: '',
    password: ''
  };

  public render(): JSX.Element {
    const { loginfield, password } = this.state;

    return (
      <LoginForm
        loginfield={loginfield}
        password={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  private _handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { currentTarget: { value, name } } = event;
    this.setState({
      [name]: value
    });
  }

  private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { fieldLogin } = this.props;
    const { loginfield, password } = this.state;

    event.preventDefault();
    fieldLogin(loginfield, password);
  }
}

export default Container;
