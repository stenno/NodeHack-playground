import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../scss/app.scss';

import Header from './Components/Header';
import Playground from './Components/Playground';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Playground />
      </>
    );
  }
}

const rootEl = document.querySelector('#root');
console.log('got root el', rootEl);
ReactDOM.render(<App />, rootEl);
