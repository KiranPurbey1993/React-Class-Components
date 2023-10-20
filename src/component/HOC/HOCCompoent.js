import React, { Component } from 'react'

const HOCComponent = (WrappedComponent) => {
    // class NewComponent extends Component {
    //     render() {
    //       return (
    //        <WrappedComponent name="Kiran"></WrappedComponent>
    //       )
    //     }
    //   }

    //   return  NewComponent;

    const NewComponent = () => {
        return (
            <WrappedComponent name="Kiran"></WrappedComponent>
        )
    }
    return NewComponent;
}

export default HOCComponent;

