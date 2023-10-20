import React from 'react';
import HOCComponent from './HOCCompoent';

const PrintComponent = (props) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default HOCComponent(PrintComponent)
