import React, {Component} from "react";

class HoverCounter2 extends Component {
 

    render(){
        const {counter, incrementCounter} = this.props
        return(
            <h1 onMouseOver={incrementCounter}>Click {counter} Times</h1>
        )
    }
}

export default HoverCounter2;