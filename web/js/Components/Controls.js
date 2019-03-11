import React from 'react';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newIndex: -1
    };
    this.handleNewIndex = this.handleNewIndex.bind(this);
    this.handlePageJumpClick = this.handlePageJumpClick.bind(this);
  }



  handleNewIndex(event) {
    this.setState({ newIndex: event.target.value });
  }
  handlePageJumpClick(event) {
    this.props.setCurrentScreen(+this.state.newIndex - 1);
  }
  render() {
    const { login, logout, running, currentScreen, numScreens } = this.props;
    return (
      <div class='controls'>
        <span class='running-indicator'>Running: {running ? 'yes' : 'no'}</span>
        <span class='screen-index'>Current screen: {currentScreen + 1}/{numScreens}</span>
        <form>
          <label htmlFor="newIndex">Jump to screen:</label>
          <input name="newIndex" type='text' value={this.state.newIndex} onChange={this.handleNewIndex} />
          <button type='button' onClick={ this.handlePageJumpClick }>Jump</button>
        </form>
      </div> 
    );
  }
}