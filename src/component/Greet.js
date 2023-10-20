import React from 'react';

const Greet = (props)=> {
    let {name, place, children} = props;
    return (
        <div>
            <h1>Hello {name} from {place} !!</h1>
            {children}
        </div>
    )
}


export default Greet;