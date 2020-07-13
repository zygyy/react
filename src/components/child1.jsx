import React from 'react'

export default class Child1 extends React.Component {
    constructor() {
        super();
        this.state = {
            input1: 0
        }
    }
    change(e) {
        this.setState({
            input1: e.target.value
        })
    }

    componentDidMount() {
        this.setState({
            input1: this.props.money
        })

    }


    render() {
        return (
            <div>
                <p>{this.props.money}</p>
                <input type="text" value={this.state.input1} onChange={this.change.bind(this)}></input>
            </div>
        )
    }
}