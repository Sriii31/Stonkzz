import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(){
    super();
    this.state={counter:0};
    }
    handleclick(){
        this.state.counter=this.state.counter+1;
        this.setState(({counter})=>(
        {counter:counter+1}))
    }
  render() {

    return (
      <div>Counter : {this.state.counter}
      <button onClick={this.handleclick.bind(this)}>Increment
      </button></div>
    )
  }
}