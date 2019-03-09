import React from 'react';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleLoginClick() {
    const { username, password } = this.state;
    this.props.login(username, password);
  }
  handleLogoutClick() {
    console.log('calling handleLogoutClick');
    this.props.logout();
  }
  render() {
    const { login, logout } = this.props;
    return (
      <form>
        <input type='text' value={ this.state.username } onChange={ this.handleUsername } />
        <input type='password' value={ this.state.password } onChange={ this.handlePassword } />
        <button type='button' onClick={ this.handleLoginClick }>Login</button>
        <button type='button' onClick={ this.handleLogoutClick }>Logout</button>
      </form>
    );
  }
}