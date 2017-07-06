import React, { Component } from 'react'
import SramWatcher from '../sram/SramWatcher'
import Item from './Item'
import MinCountItem from './MinCountItem'

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
              <Item name="Boomerang" levelIcons={["boomerang-blue gray", "boomerang-blue", "boomerang-red"]} index="1" data={this.state.data}/>
              <Item name="Hookshot" levelIcons={["hookshot gray", "hookshot"]} index="2" data={this.state.data}/>
              <MinCountItem name="Bombs" levelIcons={["bombs gray", "bombs"]} index="3" data={this.state.data}/>
            </tr>
          </tbody>
        </table>
        <SramWatcher updateItemDisplay={this.updateItemDisplay.bind(this)}/>
      </div>
    )
  }
}
