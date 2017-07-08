import React, { Component } from 'react'
import Item from './Item'

export default class BitwiseItem extends Component {
  getLevelSprite()
  {
    const index = this.props.index
    const val = this.props.data[index]
    const bit = this.props.bit

    const bits = []
    for(var i = 0; i < 32; ++i)
      bits[i] = (val >> i) & 1;

    //console.log("Bits: " + bits)
    //console.log("Value: " + bits[bit])
    return "item-image " + this.props.levelIcons[bits[bit] === 0 ? 0 : 1]
  }

  render()
  {
    return(
      <Item displayClass={this.getLevelSprite()}/>
    )
  }
}
