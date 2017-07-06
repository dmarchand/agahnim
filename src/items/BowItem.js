import React, { Component } from 'react'

export default class BowItem extends Component {
  getLevelSprite()
  {
    const bowIndex = this.props.bowIndex
    const silverArrowIndex = this.props.silverArrowIndex
    var displayIndex = 0

    if(this.props.data[silverArrowIndex] == 1)
    {
      displayIndex++
    }

    if(this.props.data[bowIndex] == 1)
    {
      displayIndex += 2
    }

    return "item-image " + this.props.levelIcons[displayIndex]
  }

  render()
  {
    return(
      <td className={this.getLevelSprite()}/>
    )
  }
}
