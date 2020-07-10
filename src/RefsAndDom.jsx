import React from 'react'

export default class RefsAndDemo extends React.Component{
    constructor(){
        super();
        this.HelloDiv=React.createRef();
    }

    componentDidMount(){
        console.log()
        this.HelloDiv.current.style.color='red'

    }

    render(){
        return (
            <div ref={this.HelloDiv}>
                ref and dom
            </div>
        )
    }
}