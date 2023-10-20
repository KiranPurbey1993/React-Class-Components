import React from 'react';
import './myStyle.css';

function Style(props){
    let classN = props.primary?'primary':'';
    return(
        <div>
            <h1 className={`${classN} f30`}>Style</h1>
        </div>
    )
}
export default Style;