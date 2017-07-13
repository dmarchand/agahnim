import React, { Component } from 'react'
import StandardItem from './StandardItem'
import MinCountItem from './MinCountItem'
import BitwiseItem from './BitwiseItem'
import ITEM_DATA from './ItemData'
import '../css/tracker.css'




export default class ItemTracker extends Component {
  render() {
    return (
      <div>
        <table className="window-background">
          <tbody>
            <tr>
              <StandardItem itemData={ITEM_DATA.bow} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.boomerang} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.hookshot} sramData={this.props.data}/>
              <MinCountItem itemData={ITEM_DATA.bombs} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.fireRod} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.iceRod} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.lamp} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.hammer} sramData={this.props.data}/>
            </tr>
            <tr>
              <StandardItem itemData={ITEM_DATA.sword} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.book} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.net} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.somaria} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.byrna} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.cape} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.mushroom} sramData={this.props.data}/>
              <MinCountItem itemData={ITEM_DATA.mirror} sramData={this.props.data}/>
            </tr>
            <tr>
              <MinCountItem itemData={ITEM_DATA.boots} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.mail} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.flippers} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.glove} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.moonPearl} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.bombos} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.ether} sramData={this.props.data}/>
              <StandardItem itemData={ITEM_DATA.quake} sramData={this.props.data}/>
            </tr>
            <tr>
              <StandardItem itemData={ITEM_DATA.shield} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.powder} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.shovel} sramData={this.props.data}/>
              <MinCountItem itemData={ITEM_DATA.flute} sramData={this.props.data}/>
              <MinCountItem itemData={ITEM_DATA.bottle} sramData={this.props.data}/>
            </tr>
            <tr>
              <BitwiseItem itemData={ITEM_DATA.wisdom} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.power} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.courage} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.agahnim} sramData={this.props.data}/>
            </tr>
            <tr>
              <BitwiseItem itemData={ITEM_DATA.palaceOfDarkness} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.swampPalace} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.skullWoods} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.thievesTown} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.icePalace} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.miseryMire} sramData={this.props.data}/>
              <BitwiseItem itemData={ITEM_DATA.turtleRock} sramData={this.props.data}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
