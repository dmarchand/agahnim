import React, { Component } from 'react'

const STATUS_MAP =
[
  {className: '', text: 'Waiting for SRAM file'},
  {className: 'status-red', text: 'Error: Bad/missing SRAM file'},
  {className: 'status-green', text: 'Auto-tracking'},
  {className: 'status-green', text: 'SRAM file loaded. Select another file to change'},
]

export default class TrackingStatus extends Component {

  render() {
    return (
      <div className={'zelda-text ' + STATUS_MAP[this.props.status].className}>Status: {STATUS_MAP[this.props.status].text}</div>
    )
  }
}
