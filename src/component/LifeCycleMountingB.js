import React, { Component } from 'react'

class LifeCycleMountingB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Kiran'
      }
      console.log("LifeCycleMountingB constructor call");
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleMountingB getDerivedStateFromProps call");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleMountingB componentDidMount call"); 
    }

  render() {
    console.log("LifeCycleMountingB render call");
    return (
      <div>
            <h1>LifeCycleMountingB</h1>
      </div>
    )
  }
}

export default LifeCycleMountingB
