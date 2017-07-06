import React, { Component } from 'react'
import SramWatcher from '../sram/SramWatcher'
import Item from './Item'
import MinCountItem from './MinCountItem'
import BitwiseItem from './BitwiseItem'

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
              <Item name="Fire Rod" levelIcons={["fire-rod gray", "fire-rod"]} index="5" data={this.state.data}/>
              <Item name="Ice Rod" levelIcons={["ice-rod gray", "ice-rod"]} index="6" data={this.state.data}/>
              <Item name="Lamp" levelIcons={["lamp gray", "lamp"]} index="10" data={this.state.data}/>
              <Item name="Hammer" levelIcons={["hammer gray", "hammer"]} index="11" data={this.state.data}/>
            </tr>
            <tr>
              <Item name="Book of Mudora" levelIcons={["book gray", "book"]} index="14" data={this.state.data}/>
              <Item name="Bug Net" levelIcons={["bug-net gray", "bug-net"]} index="13" data={this.state.data}/>
              <Item name="Cane of Somaria" levelIcons={["somaria gray", "somaria"]} index="15" data={this.state.data}/>
              <Item name="Cane of Byrna" levelIcons={["byrna gray", "byrna"]} index="16" data={this.state.data}/>
              <Item name="Cape" levelIcons={["cape gray", "cape"]} index="17" data={this.state.data}/>
              <Item name="Mirror" levelIcons={["mirror gray", "mirror"]} index="18" data={this.state.data}/>
            </tr>
            <tr>
              <Item name="Boots" levelIcons={["boots gray", "boots", "boots"]} index="20" data={this.state.data}/>
              <Item name="Flippers" levelIcons={["flippers gray", "flippers"]} index="21" data={this.state.data}/>
              <Item name="Moon Pearl" levelIcons={["moon-pearl gray", "moon-pearl"]} index="22" data={this.state.data}/>
              <Item name="Bombos" levelIcons={["bombos gray", "bombos"]} index="7" data={this.state.data}/>
              <Item name="Ether" levelIcons={["ether gray", "ether"]} index="8" data={this.state.data}/>
              <Item name="Quake" levelIcons={["quake gray", "quake"]} index="9" data={this.state.data}/>
            </tr>
            <tr>
              <BitwiseItem name="Pendant of Wisdom" levelIcons={["pendant-wisdom gray", "pendant-wisdom"]} bit="0" index="52" data={this.state.data}/>
              <BitwiseItem name="Pendant of Power" levelIcons={["pendant-power gray", "pendant-power"]} bit="1" index="52" data={this.state.data}/>
              <BitwiseItem name="Pendant of Courage" levelIcons={["pendant-courage gray", "pendant-courage"]} bit="2" index="52" data={this.state.data}/>
              <BitwiseItem name="Agahnim" levelIcons={["agahnim gray", "agahnim"]} bit="3" index="52" data={this.state.data}/>

            </tr>
            <tr>
              <BitwiseItem name="Palace of Darkness" levelIcons={["pod gray", "pod"]} bit="1" index="58" data={this.state.data}/>
              <BitwiseItem name="Swamp Palace" levelIcons={["swamp gray", "swamp"]} bit="4" index="58" data={this.state.data}/>
              <BitwiseItem name="Skull Woods" levelIcons={["skull-woods gray", "skull-woods"]} bit="6" index="58" data={this.state.data}/>
              <BitwiseItem name="Thieves Town" levelIcons={["thieves-town gray", "thieves-town"]} bit="5" index="58" data={this.state.data}/>
              <BitwiseItem name="Ice Palace" levelIcons={["ice-palace gray", "ice-palace"]} bit="2" index="58" data={this.state.data}/>
              <BitwiseItem name="Misery Mire" levelIcons={["mire gray", "mire"]} bit="0" index="58" data={this.state.data}/>
              <BitwiseItem name="Turtle Rock" levelIcons={["turtle-rock gray", "turtle-rock"]} bit="3" index="58" data={this.state.data}/>
            </tr>
          </tbody>
        </table>
        <SramWatcher updateItemDisplay={this.updateItemDisplay.bind(this)}/>
      </div>
    )
  }
}
