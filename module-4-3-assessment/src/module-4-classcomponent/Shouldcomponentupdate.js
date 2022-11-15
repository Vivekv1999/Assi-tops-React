import React, { Component } from 'react'

export default class Shouldcomponentupdate extends Component {
    constructor() {
        super()
        console.log('constuctor is calling ....');

        this.state = {
            count: 0
        }
    }

    update = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    shouldComponentUpdate() {
        console.log('componentdidupadte is not calling beacse satte is not update', this.state.count);
        return false;
    }

    render() {
        return (
            <div>
                {console.log('return is rendring')}
                
                <h1>{this.state.count}</h1>
                <button onClick={this.update}>increment</button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>decrement</button>

            </div>
        )
    }
}


// ======>  in shouldComponentUpdate we retun is true then rendring is on web
//====>   if we return false in shouldComponentUpdate then state is not upadate and not rendering on web