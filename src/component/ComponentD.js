import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentD extends Component {
    static contextType = UserContext
  render() {
    return (
      <div>
      Component D context {this.context}
        <ComponentF/>
      </div>
    )
  }
}

export default ComponentD
