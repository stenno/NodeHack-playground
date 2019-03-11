import React from 'react';
import MapWindow from './MapWindow';
import StatusWindow from './StatusWindow';
import '../../scss/screen.scss';
export default class Screen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { map, status } = this.props.data;
    return (<div class='screen'>
      <MapWindow currentMap={ map } />
      <StatusWindow currentStatus={ status } />
    </div>);
  }
}