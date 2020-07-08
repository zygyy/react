import React from 'react'

export default class stateCompoent extends React.Component {
    /**
     * 组件中的状态：state
     * 页面元素的改变使用State处理
     */
     constructor(props){
         super(props);
         //定义state
         this.state={
             count:10
         }
     }
    render() {
        return (
            <div>
                <h3>组件的state状态</h3>
                <p>{this.state.count}</p>
            </div>
        )

    }
}
