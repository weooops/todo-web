import * as React from 'react';

import SignupForm from './SignupForm';

interface IProps {
  createAccount(username: string, email: string, password: string, comparePassword: string): void;
}

interface IStates {
  [key: string]: string;
}

class Container extends React.Component<IProps, IStates> {
  public state: IStates = {
    username: '',
    email: '',
    password: '',
    comparePassword: ''
  };

  public render(): JSX.Element {
    const { username, email, password, comparePassword } = this.state;

    return (
      <SignupForm
        username={username}
        email={email}
        password={password}
        comparePassword={comparePassword}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  private _handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { currentTarget: { value, name } } = event;
    this.setState({ [name]: value });
  }

  private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { createAccount } = this.props;
    const { username, email, password, comparePassword } = this.state;

    event.preventDefault();
    createAccount(username, email, password, comparePassword);
  }
}

export default Container;
