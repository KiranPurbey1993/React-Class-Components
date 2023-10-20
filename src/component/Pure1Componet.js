import React, { PureComponent } from 'react'

export default class Pure1Componet extends PureComponent {
  render() {
    console.log('Pure1Componet component');
    return (
      <div>
            <h1>{this.props.name}</h1>
      </div>
    )
  }
}
