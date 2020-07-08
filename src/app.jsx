import React from 'react'
import Home from './Home'
import Mynav from './MyNav'
import StateCompoent from "./stateCompoent";

//类的形式创建组件
class App extends React.Component{
    
    //渲染函数
    render(){
        const nav1=['首页','学习','游戏']
        const nav2=['spring','springmvc','springboot']
        return (
            <div>
                 {/* 组件的复用 */}
                {/* <h1>
                    Hello React Component
                </h1>
                <Home></Home>
                <Mynav nav={nav1} title="生活"></Mynav>
                <Mynav nav={nav2} title="学习"></Mynav> */}
                <StateCompoent></StateCompoent>
            </div>
        )
    }
}
export default App
