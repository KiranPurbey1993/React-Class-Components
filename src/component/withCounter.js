import React, { Component } from 'react'
// Higher Order Component where WithCounter is updated counter and 
// WrappedCounter is a original component
const withCounter = (WrappedCounter, incrementVal)=>{

    class WithCounter extends Component{
        constructor(props){
            super(props)
            this.state = {
                counter:0
            }
            
        }
    
        incrementCounter = ()=>{
            this.setState((prevState)=>{
                return {counter:prevState.counter + incrementVal}
            })
        }
        render(){
            return <WrappedCounter counter={this.state.counter} incrementCounter={this.incrementCounter} 
            { ...this.props}/>
        }
    }
    return WithCounter;
    
}
export default withCounter;