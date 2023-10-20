import React, { Component } from 'react'
import LifeCycleMountingB from './LifeCycleMountingB'

class LifeCycleMountingA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Kiran'
      }
      console.log("LifeCycleMountingA constructor call");
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleMountingA getDerivedStateFromProps call");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleMountingA componentDidMount call"); 
    }

  render() {
    console.log("LifeCycleMountingA render call");
    return (
      <div>
            <h1>LifeCycleMountingA</h1>
            <LifeCycleMountingB/>
      </div>
    )
  }
}

export default LifeCycleMountingA
