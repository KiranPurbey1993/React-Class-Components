import React, {Component} from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component{
    constructor(){
        super()
        this.state = {
            parentName:"Parent"
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
       alert(`Hello to ${this.state.parentName} from ${childName}`);
    }
    
    render(){
        return (
           <ChildComponent callHandler={this.greetParent}></ChildComponent>
        )
    }
}

export default ParentComponent;