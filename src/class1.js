import React, { Component } from 'react'
import Class2 from './Class2'

export default class class1 extends Component {

    constructor(props){
        super(props)
        console.log("Class1's Constructor")

    }

    static getDerivedStateFromProps(props,state){
        console.log("Class1 getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("Class1 componentDidMount")
    }
    shouldComponentUpdate()
{
  console.log("Class1 shouldComponentUpdate")
  return true;
}
getSnapshotBeforeUpdate(prevProps,prevState)
{
  console.log("Class1 getSnapshotBeforeUpdate")
  return null;
} 
componentDidUpdate()
{
  console.log("Class1 componentDidUpdate")
}


  render() {
    return (
      <div>class1</div>
    )
  }
}



