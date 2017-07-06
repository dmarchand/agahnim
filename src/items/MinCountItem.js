import React, { Component } from 'react'

export default class MinCountItem extends Component {
  getLevelSprite()
  {
    const index = this.props.index
    const val = this.props.data[index] > 0 ? 1 : 0
    return this.props.levelIcons[val] + " item-image item-cell"
  }

  render()
  {
    return(
      <td className={this.getLevelSprite()}/>
    )
  }
}
