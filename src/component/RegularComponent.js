import React, { Component } from 'react'

export class RegularComponent extends Component {
  render() {
    console.log('RegularComponent component');
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default RegularComponent
