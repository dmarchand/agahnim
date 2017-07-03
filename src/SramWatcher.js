import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const dialog = window.require('electron').remote.dialog
const bytes = window.require('bytes-stream')
const fs = window.require('fs')

export default class SramWatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {path: ""}

    this.readSram = this.readSram.bind(this)
    this.parseFile = this.parseFile.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.tick = this.tick.bind(this)
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick, 5000)
  }

  tick () {
    const path = this.state.path

    if(!path || path == "")
    {
      return
    }

    this.parseFile(path)
  }

  parseFile(filePath) {
    fs.createReadStream(filePath, {start: 0x1E00})
      .pipe(new bytes([0, 255]))
      .on('data', d => console.log('data', d));
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
      <div className="App">
        <button onClick={this.readSram}>Select file...</button>
      </div>

    );
  }
}
