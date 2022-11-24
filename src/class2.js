import React, { Component } from 'react'

export default class Class2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name:"Gokul"
    }
    console.log("Class2's Constructor")
  }
  static getDerivedStateFromProps(props,state){
    console.log("class2 getDerivedStateFromProps")
    return null;
  }
  componentDidMount(){
     console.log("Class2 componentDidMount")
  }
render() {
    console.log("Class2 Render method")
    return (
      <div>In Class2</div>
    )
  }
}