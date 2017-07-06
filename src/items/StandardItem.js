import React, { Component } from 'react'
import Item from './Item'

export default class StandardItem extends Component {
  getLevelSprite()
  {
    const index = this.props.index
    const val = this.props.data[index]
    return "item-image " + this.props.levelIcons[val]
  }

  render()
  {
    return(
      <Item displayClass={this.getLevelSprite()}/>
    )
  }
}
