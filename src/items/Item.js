import React, { Component } from 'react'

export default class Item extends Component {
  render()
  {
    return(
      <td className={this.props.displayClass}/>
    )
  }
}
