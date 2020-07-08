import React from 'react'

export default class stateCompoent extends React.Component {
    /**
     * 组件中的状态：state
     * 页面元素的改变使用State处理
     */
    constructor(props) {
        super(props);
        //定义state
        this.state = {
            count: 10,
            flag: true

        }
    }
    //增加函数
    increnemt() {
        this.setState({
            count: this.state.count += 1
        })
    }

    //减少函数
    decrement() {
        this.setState({
            count: this.state.count -= 1
        })
    }

    //箭头函数的存在是为了解决this的问题
    clickHandler = () => {
        console.log(this)
    }

    //修改falg属性为false
    editFlag = () => {
        console.log("hello")
        this.setState({
            flag: this.state.flag = false
        })

    }

    render() {
        let showView = this.state.flag ? 'zy' : 'cq'
        return (
            <div>
                <h3>组件的state状态</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increnemt.bind(this)}>增加</button>
                <button onClick={this.decrement.bind(this)}>减少</button>
                <button onClick={this.clickHandler}>关于This</button>
                <button onClick={this.editFlag}>修改flag</button>
                {showView}
            </div>
        )

    }
}
