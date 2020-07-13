import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            money: 1
        }
    }
    change(e) {
        this.setState({
            money: e.target.value
        })
    }
    render() {
        let result = this.state.money > 0 ? <div>合法</div> : <div>不合法,请再次确认</div>
        return (
            <div>
                <input type="text" value={this.state.money} onChange={this.change.bind(this)}></input>
                <p>Parent</p>
                <p>{result}</p>
                人民币:<Child1 money={this.state.money}></Child1>
                美金:<Child2 money={this.state.money}></Child2>
            </div>
        )
    }
}