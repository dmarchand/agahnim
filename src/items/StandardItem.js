import React, { Component } from 'react'
import Item from './Item'

export default class StandardItem extends Component {
  getLevelSprite()
  {
    const index = this.props.itemData.index
    const val = this.props.sramData[index]
    return "item-image " + this.props.itemData.icons[val]
  }

  render()
  {
    return(
      <Item displayClass={this.getLevelSprite()}/>
    )
  }
}
