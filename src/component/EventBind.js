import React , { Component } from "react";

class EventBind extends Component{
    constructor(){
        super()
        this.state ={
            message:"Hello"
        }
        // .........3rd approach
        // this.clickHandler = this.clickHandler.bind(this);   
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Good Bye"
    //     })
    // }

    // approach no 4
    clickHandler2 = ()=>{
        this.setState({
            message:"Good Bye"
        }) 
    }

    render(){
        return(
            <div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <br/>
                {/* <button onClick={()=>this.clickHandler()}> second way</button> */}
                <br/>
                {/* <button onClick={this.clickHandler}>Click</button> */}
                <br/>
                <button onClick={this.clickHandler2}>Click</button>
                <br/>
                {this.state.message}
            </div>
        )
    }
}

export default  EventBind;