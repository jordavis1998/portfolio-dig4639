import React, { useState } from "react"

export default class MenuItem extends React.Component {
  render() {
    // const [setDisplayCounter] = useState(false);
    return (
      <div class="menu-item" id={`menu-item-${this.props.itemId}`}>
      <p>${this.props.itemPrice}</p>
      <h2>{this.props.itemName}</h2>
      <p>{this.props.itemDescription}</p>
      <button>Add to Cart</button>
      </div>);
  }
}

