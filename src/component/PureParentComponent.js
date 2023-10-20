import React, { Component } from 'react'
// import Pure1Componet from './Pure1Componet'
// import RegularComponent from './RegularComponent';
import MemoComponent from './MemoComponent';

export class PureParentComponent extends Component {
    constructor(){
        super()
        this.state={
            name:"Kiran"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Kiran"
            })
        }, 2000);
    }
  render() {
    console.log('parent component');
    return (
      <div>
        {/* <Pure1Componet name={this.state.name}></Pure1Componet>
        <RegularComponent name={this.state.name}></RegularComponent> */}

        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    )
  }
}

export default PureParentComponent
