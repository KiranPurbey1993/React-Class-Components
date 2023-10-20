import React, {Component} from "react";
import withCounter from './withCounter'

class ClickCounter extends Component {
    

    render(){
        const {counter, incrementCounter} = this.props
        return(<>
        {this.props.name}
        <button onClick={incrementCounter}>Click {counter} Times</button>
        </>
            
        )
    }
}

export default withCounter(ClickCounter, 4);