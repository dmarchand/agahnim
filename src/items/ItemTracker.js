import React, { Component } from 'react'
import SramWatcher from '../sram/SramWatcher'
import StandardItem from './StandardItem'
import MinCountItem from './MinCountItem'
import BitwiseItem from './BitwiseItem'
import '../css/tracker.css'

export default class ItemTracker extends Component {
  render() {
    return (
      <div>
        <table className="window-background">
          <tbody>
            <tr>
              <StandardItem name="Bow" levelIcons={["bow gray", "bow", "silver-arrow", "silver-bow"]} index="0" data={this.props.data}/>
              <StandardItem name="Boomerang" levelIcons={["boomerang-blue gray", "boomerang-blue", "boomerang-red"]} index="1" data={this.props.data}/>
              <StandardItem name="Hookshot" levelIcons={["hookshot gray", "hookshot"]} index="2" data={this.props.data}/>
              <MinCountItem name="Bombs" levelIcons={["bombs gray", "bombs"]} index="3" data={this.props.data}/>
              <StandardItem name="Fire Rod" levelIcons={["fire-rod gray", "fire-rod"]} index="5" data={this.props.data}/>
              <StandardItem name="Ice Rod" levelIcons={["ice-rod gray", "ice-rod"]} index="6" data={this.props.data}/>
              <StandardItem name="Lamp" levelIcons={["lamp gray", "lamp"]} index="10" data={this.props.data}/>
              <StandardItem name="Hammer" levelIcons={["hammer gray", "hammer"]} index="11" data={this.props.data}/>
            </tr>
            <tr>
              <StandardItem name="Sword" levelIcons={["fighter-sword gray", "fighter-sword", "master-sword", "tempered-sword", "butter-sword"]} index="25" data={this.props.data}/>
              <StandardItem name="Book of Mudora" levelIcons={["book gray", "book"]} index="14" data={this.props.data}/>
              <StandardItem name="Bug Net" levelIcons={["bug-net gray", "bug-net"]} index="13" data={this.props.data}/>
              <StandardItem name="Cane of Somaria" levelIcons={["somaria gray", "somaria"]} index="15" data={this.props.data}/>
              <StandardItem name="Cane of Byrna" levelIcons={["byrna gray", "byrna"]} index="16" data={this.props.data}/>
              <StandardItem name="Cape" levelIcons={["cape gray", "cape"]} index="18" data={this.props.data}/>
              <BitwiseItem name="Mushroom" levelIcons={["mushroom gray", "mushroom"]} index="210" bit="5" data={this.props.data}/>
              <MinCountItem name="Mirror" levelIcons={["mirror gray", "mirror"]} index="19" data={this.props.data}/>
            </tr>
            <tr>
              <StandardItem name="Boots" levelIcons={["boots gray", "boots", "boots"]} index="21" data={this.props.data}/>
              <StandardItem name="Mail" levelIcons={["green-tunic", "blue-tunic", "red-tunic"]} index="27" data={this.props.data}/>
              <StandardItem name="Flippers" levelIcons={["flippers gray", "flippers"]} index="22" data={this.props.data}/>
              <StandardItem name="Glove" levelIcons={["power-glove gray", "power-glove", "titans-mitts"]} index="20" data={this.props.data}/>
              <StandardItem name="Moon Pearl" levelIcons={["moon-pearl gray", "moon-pearl"]} index="23" data={this.props.data}/>
              <StandardItem name="Bombos" levelIcons={["bombos gray", "bombos"]} index="7" data={this.props.data}/>
              <StandardItem name="Ether" levelIcons={["ether gray", "ether"]} index="8" data={this.props.data}/>
              <StandardItem name="Quake" levelIcons={["quake gray", "quake"]} index="9" data={this.props.data}/>
            </tr>
            <tr>
              <BitwiseItem name="Powder" levelIcons={["powder gray", "powder"]} index="210" bit="4" data={this.props.data}/>
              <BitwiseItem name="Shovel" levelIcons={["shovel gray", "shovel"]} index="210" bit="2" data={this.props.data}/>
              <StandardItem name="Flute" levelIcons={["flute gray", "flute gray", "flute"]} index="12" data={this.props.data}/>
              <MinCountItem name="Bottle" levelIcons={["bottle gray", "bottle"]} index="15" data={this.props.data}/>
            </tr>
            <tr>
              <BitwiseItem name="Pendant of Wisdom" levelIcons={["pendant-wisdom gray", "pendant-wisdom"]} bit="0" index="52" data={this.props.data}/>
              <BitwiseItem name="Pendant of Power" levelIcons={["pendant-power gray", "pendant-power"]} bit="1" index="52" data={this.props.data}/>
              <BitwiseItem name="Pendant of Courage" levelIcons={["pendant-courage gray", "pendant-courage"]} bit="2" index="52" data={this.props.data}/>
              <BitwiseItem name="Agahnim" levelIcons={["agahnim gray", "agahnim"]} bit="3" index="52" data={this.props.data}/>
            </tr>
            <tr>
              <BitwiseItem name="Palace of Darkness" levelIcons={["pod gray", "pod"]} bit="1" index="58" data={this.props.data}/>
              <BitwiseItem name="Swamp Palace" levelIcons={["swamp gray", "swamp"]} bit="4" index="58" data={this.props.data}/>
              <BitwiseItem name="Skull Woods" levelIcons={["skull-woods gray", "skull-woods"]} bit="6" index="58" data={this.props.data}/>
              <BitwiseItem name="Thieves Town" levelIcons={["thieves-town gray", "thieves-town"]} bit="5" index="58" data={this.props.data}/>
              <BitwiseItem name="Ice Palace" levelIcons={["ice-palace gray", "ice-palace"]} bit="2" index="58" data={this.props.data}/>
              <BitwiseItem name="Misery Mire" levelIcons={["mire gray", "mire"]} bit="0" index="58" data={this.props.data}/>
              <BitwiseItem name="Turtle Rock" levelIcons={["turtle-rock gray", "turtle-rock"]} bit="3" index="58" data={this.props.data}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
