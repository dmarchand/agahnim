import React, { Component } from 'react'
import Item from './Item'

export default class MinCountItem extends Component {
  getLevelSprite()
  {
    const index = this.props.itemData.index
    const val = this.props.sramData[index] > 0 ? 1 : 0
    return this.props.itemData.icons[val] + " item-image item-cell"
  }

  render()
  {
    return(
      <Item displayClass={this.getLevelSprite()}/>
    )
  }
}
