import React from 'react'

export default class CompoentLife extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }

    }

    //在组件渲染之前执行
    componentWillMount() {
        console.log("componentWillMount")
    }

    //在组件之后执行
    componentDidMount() {
        console.log("componentDidMount")
    }

    //返回true和false,true代表允许改变,false代表不允许改变
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
    }

    //数据在改变之前执行(
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    //数据修改完成
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    changeClick = () => {
        this.setState({
            count: this.state.count += 1
        })
    }
    changeChange = () => {
        this.props.changeChanges("子数据");
    }


    render() {
        const { count } = this.state;
        return (
            <div>
                生命周期函数:{count}——{this.props.title}
                <button onClick={this.changeClick}>
                    修改
            </button>
            <button onClick={this.changeChange}>
                    修改Title
            </button>
            </div>

        )
    }
}