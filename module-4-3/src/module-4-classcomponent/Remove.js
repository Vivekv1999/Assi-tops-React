import React, { Component } from 'react'

export default class Remove extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount called")
    }
    

  render() {
    return (
      <div>
        <h1>remove component onClcik toggle</h1>
      </div>
    )
  }
}
