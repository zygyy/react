import React from 'react'
export default class SetStateDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    async add(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })
        await this.seteStateAsync({count:this.state.count+1})
        console.log(this.state.count)
    }

     seteStateAsync(state){
        return new Promise((resolve)=>{
            this.setState(state,resolve)
        })
    }
    render() {
        return (
            <div>
                setState同步还是异步
                <p>{this.state.count}</p>
                <button onClick={this.add.bind(this)}>add</button>
            </div>
        )
    }
}
