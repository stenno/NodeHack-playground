import React from 'react';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [],
      currentScreen: 0,
    };
  }
  render() {
    return <div>main screen turn on</div>;
  }
}