import React, {Component} from "react";


class ChildComponent extends Component{
    render(){
        return (
          <button onClick={()=>this.props.callHandler('Child')}>Call Parent</button>
        )
    }
}

export default ChildComponent;