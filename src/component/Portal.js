import React from 'react'
import {createPortal} from 'react-dom';

const Portal = () => {
    let el = <h1>Kiran</h1>;
  return (
   createPortal(el, document.getElementById('portal'))
  )
}

export default Portal
