import React from 'react'

export default class FormDemo extends React.Component {

    constructor(){
        super();
        this.state={
            value:''
        }
    }
    //表单提交事件
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value)
    }

    //input输入框输入值的改变
    onChangeHandler=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* input中的value属性需要提前在constructor设置 */}
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler}/>
                    <input type='submit'value='提交'></input>
                </form>  
            </div>
        )
    }
}