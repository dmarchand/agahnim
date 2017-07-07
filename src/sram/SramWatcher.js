import React, { Component } from 'react'
import TrackingStatus from './TrackingStatus'
import '../css/tracker.css'
import PropTypes from 'prop-types';

const dialog = window.require('electron').remote.dialog
const bytes = window.require('bytes-stream')
const fs = window.require('fs')

export default class SramWatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {path: "", status: 0}

    this.readSram = this.readSram.bind(this)
    this.parseFile = this.parseFile.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.tick = this.tick.bind(this)
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick, 1000)
  }

  tick () {
    const path = this.state.path

    if(!path || path === "")
    {
      this.setState({status: 1})
      return
    }

    this.parseFile(path)
  }

  parseFile(filePath) {
    fs.createReadStream(filePath, {start: 0x1E00})
      .pipe(new bytes([0, 255]))
      .on('data', d => {
        console.log('data', d)
        this.props.updateItemDisplay(d)
        this.setState({status: 2})
      });
  }

  readSram() {
    const result = dialog.showOpenDialog({properties: ['openFile']})

    if(!result) {
      return
    }

    this.startTimer()
    this.setState({path: result[0]})
  }

  render() {
    return (
      <div>
        <TrackingStatus status={this.state.status}/>
        <button onClick={this.readSram}>Select file...</button>
      </div>
    );
  }
}

SramWatcher.propTypes = {
  updateItemDisplay: PropTypes.func,
};
