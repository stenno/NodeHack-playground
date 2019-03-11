import React from 'react';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.state = {
      username: '',
      password: '',

    }
  }
  handleLoginClick() {
    const { username, password } = this.state;
    this.props.login(username, password);
  }
  handleLogoutClick() {
    console.log('calling handleLogoutClick');
    this.props.logout();
  }
  handleUsername(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    const { running } = this.props;
    const { username, password } = this.state;
    
    return (
      <div class='login-container'>
      { !running && 
        <form>
          <input type='text' value={ username } onChange={ this.handleUsername } />
          <input type='password' value={ password } onChange={ this.handlePassword } />
          <button type='button' onClick={ this.handleLoginClick }>Login</button>
        </form>
      }
      { running && 
        <form>
          <button type='button' onClick={ this.handleLogoutClick }>Logout</button> 
        </form>
      }
      </div>
    )
    
    }
  }
  