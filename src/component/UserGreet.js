import React, { Component } from 'react'

export default class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Kiran</div>
    // ) :
    // (
    //     <div>Welcome Guest</div>
    // ) 

    // if(this.state.isLoggedIn ){
    //     return(<div>Welcome Kiran</div>)
    // }else{
    // return (<div>Welcome Guest</div>)
    // }


    let message;
    if(this.state.isLoggedIn){
        message = <div>Welcome Kiran</div>
    }else{
        message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>
  }
}
