import React, { Component } from 'react'
import Item from './Item'

export default class StandardItem extends Component {
  getLevelSprite()
  {
    const index = this.props.itemData.index
    var val = this.props.sramData[index]

    // Uninitialized SRAM has some undefined behavior, let's avoid that
    if(val >= 96)
    {
      val = 0
    }

    return "item-image " + this.props.itemData.icons[val]
  }

  render()
  {
    return(
      <Item displayClass={this.getLevelSprite()}/>
    )
  }
}
