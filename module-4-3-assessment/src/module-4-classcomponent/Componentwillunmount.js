import React, { Component } from 'react'
import Remove from './Remove'


export default class Componentwillunmount extends Component {
  constructor() {
    super()
    console.log('constuctor is calling ....');
    this.state = {
      show: true
    }
  }

  componentWillUnmount(){
    console.log('remove...');
    
  }



  render() {
    return (
      <div>
        
        <h1>{this.state.show?<Remove /> :"component removed succesfully"}</h1>
        <button onClick={() => { this.setState({ show: !(this.state.show) }) }}>toggle onClcik</button>

      </div>
    )
  }
}


///===> as these code requird remove.js componet  for explanation

///--> we as code we know tht first componentWillUnmount is called then componet will remove
