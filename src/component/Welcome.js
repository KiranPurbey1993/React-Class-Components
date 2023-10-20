import React , {Component} from 'react';


class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            age:28
        }
    }
    render(){
        const {age} = this.state;
        const {name} = this.props;
        return(
            <div>
                <h1>I am  {name} Class Component</h1>
                {age}
            </div>
        ) 
    }
       
    
}


export default Welcome;
