import React, { Component } from 'react'

export default class Compontdidupdate extends Component {
    constructor(){
        super()
        console.log('constuctor is calling ....');
    }

    componentDidUpdate(){
        console.log('componentdidupadte is not calling beacse satte is not update');
    }

  render() {
    return (
     console.log('rendring return....')
    )
  }
}
