import React, {Component} from "react";

class ClickCounter2 extends Component {
 

    render(){
        const {counter, incrementCounter} = this.props
        return(
            <button onClick={incrementCounter}>Click {counter} Times</button>
        )
    }
}

export default ClickCounter2;