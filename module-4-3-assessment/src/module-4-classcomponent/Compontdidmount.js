import React, { Component } from 'react'

export default class Compontdidmount extends Component {
    constructor(){
        super()
        console.log('first consturctor calling');   
    }

    componentDidMount(){
        console.log('last component did mount is calling');
        
    }
  render() {
    return console.log('second html and jsx is calling.... ');
    
  }
}
