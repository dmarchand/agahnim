import React, { Component } from 'react'

export default class Item extends Component {
  getLevelSprite()
  {
    const index = this.props.index
    const val = this.props.data[index]
    return this.props.levelIcons[val] + " item-image"
  }

  render()
  {
    return(
      <td className={this.getLevelSprite()}/>
    )
  }
}
