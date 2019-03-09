import React from 'react';
import Screen from './Screen';
import Controls from './Controls';

import '../../scss/playground.scss';

const post = (route, data) => {
  const options = { 
    method: 'POST', 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data) 
  };
  return fetch(route, options).then(res => res.json());
};

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login(username, password) {
    post('/login', { username, password }).then(({ success, message, screens }) => {
      console.log('screens', screens);
    });
  }
  logout() {
    post('/save').then(({ success, message, screens }) => {
      console.log('logout', screens);
      this.setState({ running: false });
    });
  }

  render() {
    return (
      <main>
        <Screen />
        { !this.running && <Controls login={ this.login } logout={ this.logout } /> }
      </main>
    );
  }
}