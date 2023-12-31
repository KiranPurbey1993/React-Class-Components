import React, { Component } from 'react'

class ErrorBoudary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
    }
  render() {
    if(this.state.hasError){
        return <h1>Something Went Wrong</h1>
    }else{
        return this.props.children
    }
    
  }
}

export default ErrorBoudary
