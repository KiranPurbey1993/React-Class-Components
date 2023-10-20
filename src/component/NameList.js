import React, { Component } from 'react'
// import Person from './Person';

class NameList extends Component {
  render() {
    // const persons = [{
    //     id:1,
    //     name:"Kiran",
    //     age:30,
    //     skills:'Angular'
    // },
    // {
    //     id:2,
    //     name:"Ritesh",
    //     age:29,
    //     skills:'Ruby'  
    // }
    // ,
    // {
    //     id:3,
    //     name:"Rituraj",
    //     age:27,
    //     skills:'Java'  
    // }];

    // const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
     const names=["Ritesh", "Kiran", "Shashi"]
    const nameList = names.map((name, index)=>(<h1 key={index}>{index}.{name}</h1>))
    return (
      <div >
           { nameList}
      </div>
    )
  }
}

export default NameList;
