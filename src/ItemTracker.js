import React, { Component } from 'react'
import SramWatcher from './SramWatcher'
import Item from './Item'

export default class ItemTracker extends Component {
  constructor(props) {
    super(props)

    const emptyBytes = []
    for(var i = 0; i < 256; i++)
    {
      emptyBytes[i] = 0
    }

    this.state = {data: emptyBytes}
  }

  updateItemDisplay(newData) {
    this.setState({data: newData})
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <Item name="Boomerang" levelIcons={["boomerang-blue gray", "boomerang-blue"]} index="1" data={this.state.data}/>
            </tr>
          </tbody>
        </table>
        <SramWatcher updateItemDisplay={this.updateItemDisplay.bind(this)}/>
      </div>
    )
  }
}
