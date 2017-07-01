import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  readSram() {
    const dialog = window.require('electron').remote.dialog
    const fs = window.require('fs')
    const result = dialog.showOpenDialog({properties: ['openFile']})
    var readStream = fs.createReadStream(result[0], { start: 0x1E00})

    readStream.on('data', function (chunk) {
      console.log(chunk)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
              {this.readSram()}
      </div>

    );
  }
}

export default App;