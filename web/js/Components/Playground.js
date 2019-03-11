import React from 'react';
import Screen from './Screen';
import Controls from './Controls';
import Login from './Login';

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
      running: false,
      screens: [],  // this should be in a proper store
      currentScreenIndex: -1
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setCurrentScreen = this.setCurrentScreen.bind(this);
  }
  login(username, password) {
    post('/login', { username, password }).then(({ success, message, screens }) => {
      if (success === true) {
        this.setState({
          running: true,
          screens,
          currentScreenIndex: screens.length - 1
        });
      }
    });
  }
  logout() {
    post('/save').then(({ success, message, screens }) => {
      console.log('logout', screens);
      this.setState({ running: false });
    });
  }
  setCurrentScreen(currentScreenIndex) {
    if (currentScreenIndex >= 0 && currentScreenIndex < this.state.screens.length) {
      this.setState({ currentScreenIndex });
    }
  }

  render() {
    const { screens, currentScreenIndex, running } = this.state;
    const currentScreen = screens[currentScreenIndex];
    const numScreens = screens.length;
    return (
      <main>
        { running && 
          <Screen data={ currentScreen } />
        }
        <Login running={ running } login={ this.login } logout={ this.logout } />
        <Controls 
          currentScreen={ currentScreenIndex }
          numScreens={ numScreens }
          setCurrentScreen={ this.setCurrentScreen }
          running={ running }
        />
      </main>
    );
  }
}