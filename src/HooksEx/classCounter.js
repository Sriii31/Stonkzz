import React, { Component } from 'react'

export default class classCounter extends Component {
  constructor(){
    super();
    this.state=({
      count:0,
      name:"Sripathi",

    })
  }


        increment=()=>{
            this.setState(({count:this.state.count=1}))
        }

         render() {
         return (

      <div>
      <p>class Counter</p>
      <button onClick={this.increment}>Count{this.state.count}</button>
      </div>
    )
  }
}
