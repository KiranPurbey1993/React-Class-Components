import React, {Component} from "react";
import withCounter from './withCounter'

class HoverCounter extends Component {
 

    render(){
        const {counter, incrementCounter} = this.props
        return(
            <h1 onMouseOver={incrementCounter}>Click {counter} Times</h1>
        )
    }
}

export default withCounter(HoverCounter, 10);