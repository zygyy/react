import React from 'react'

export default class KeyDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            userInfo: [
                {
                    name: 'zy',
                    age: 20,
                    sex: '男',
                    jobs: ['hello', 'hi', 'what']
                },
                {
                    name: '貂蝉',
                    age: 21,
                    sex: '女',
                    jobs: ['who', 'how', 'why']
                },
                {
                    name: '陈群',
                    age: 22,
                    sex: '女',
                    jobs: ['where', 'when', '!?']
                }
            ]
        }
    }

    change = () => {
        this.setState({
            //map()方法返回的数组的长度(length)
            userInfo:this.state.userInfo.concat({
                name:'安琪拉',
                age:20,
                sex:'女',
                jobs:['#','$','%']
            })
        })

    }
    //key的意义:如果数据的索引没有发生变化,则UI不会重绘;只有发生变化的部分会重绘
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.userInfo.map((element, index) => {
                            return (
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                    <div>
                                        {
                                            element.jobs.map((e, key) => {
                                                return (
                                                    <li key={key}>
                                                        <sapn>{e}</sapn>
                                                    </li>
                                                )
                                            })
                                        }
                                    </div>
                                </li>)
                        })
                    }
                </ul>
                <button onClick={this.change}>改变</button>
            </div>
        )
    }
} 