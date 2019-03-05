import React from 'react';
import '../../scss/header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1 class="headline">The super cool NodeHack playground!</h1>
      </header>
    );
  }
}