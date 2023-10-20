import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter :0
        }
    }
    incremenet(){

        // this.setState({
        //     counter:this.state.counter + 1
        // },()=>{
        //     console.log(this.state.counter);
        // });
        this.setState((prevState)=>({
            counter: prevState.counter + 1
        }),()=>{
            console.log(this.state.counter);
        });
    }

    incremenetByFive(){
        this.incremenet();
        this.incremenet();
        this.incremenet();
        this.incremenet();
        this.incremenet();
    }

  render() {
    return (
      <div>
        <b>Counter</b> - {this.state.counter}
        <button onClick={()=>this.incremenetByFive()}>incremnet</button>
      </div>
    )
  }
}

export default Counter
