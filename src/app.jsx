import React from 'react'
// import Home from './Home'
// import Mynav from './MyNav'
// import StateCompoent from "./stateCompoent";
// import CompoentLife from './CompoentLife';
// import SetStateDemo from './setStateDemo'
// import IFDemo from './IFDemo'
// import KeyDemo from './KeyDemo'
// import FormDemo from './FormDemo'
//import RefsAndDom from './RefsAndDom'
import RefsForm from './RefsForm'

//类的形式创建组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '文本'
        }
    }

    changeChange = (data) => {
        this.setState({
            title:data
        })
    }

    //渲染函数
    render() {
        const nav1 = ['首页', '学习', '游戏']
        const nav2 = ['spring', 'springmvc', 'springboot']
        return (
            <div>
                {/* 组件的复用 */}
                {/* <h1>
                    Hello React Component
                </h1>
                <Home></Home>
                <Mynav nav={nav1} title="生活"></Mynav>
                <Mynav nav={nav2} title="学习"></Mynav> */}
                {/* <StateCompoent></StateCompoent> */}
                {/* <CompoentLife title={this.state.title} changeChanges={this.changeChange}></CompoentLife> */}
                {/* <button onClick={this.changeChange}>
                    修改Title
            </button> */}
            {/* <SetStateDemo></SetStateDemo> */}
            {/* <IFDemo></IFDemo> */}
            {/* <KeyDemo></KeyDemo> */}
            {/* <FormDemo></FormDemo> */}
            {/* <RefsAndDom></RefsAndDom> */}
            <RefsForm>
            </RefsForm>
            </div>
        )
    }
}
export default App
