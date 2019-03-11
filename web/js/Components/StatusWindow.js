import React from 'react';

export default class StatusWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props.currentStatus;
    const statusItems = Object.entries(data).map(([key, value]) => <li>{key}: {value}</li>);
    return (
      <div class='status-container'>
        <ul>
          { statusItems }
        </ul>
      </div>
    )
  }
}