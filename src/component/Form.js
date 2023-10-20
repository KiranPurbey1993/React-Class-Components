import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            userName:'',
            address:'',
            topic:'React'
        };
    }

    changeName = (event)=>{
        this.setState({
           userName:event.target.value
        })
    }

    changeAddress = (event)=>{
        this.setState({
            address:event.target.value
        })
    }

    changeTopic = event =>{
        this.setState({
            topic:event.target.value
        });
    }

    handleSubmit = (event) =>{
        alert(`${this.state.userName} ${this.state.address} ${this.state.topic}`);
        event.preventDefault();
    }
  render() {
    const {userName, address, topic} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName : </label>
            <input type='text' value={userName}  onChange={this.changeName}/>
        </div>
        <br/>
        <div>
            <label>Address : </label>
            <input type='text' value={address}  onChange={this.changeAddress}/>
        </div>
        <br/>
        <div>
            <label>Topics : </label>
            <select value={topic} onChange={this.changeTopic}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
