import React, { Component } from 'react'

class Person extends Component {
  render() {
    const {...p} = this.props.person;
    return (
      <div>
        <h1> I am {p.name}, I am {p.age}, I know {p.skills}</h1>
      </div>
    )
  }
}

export default Person;
