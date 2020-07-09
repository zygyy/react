import React from 'react'

export default class IFDemo extends React.Component {
    /**
     * 常用的应用场景:
     * 1.对试图条件进行切换
     * 2.做缺省值
     */
    constructor() {
        super();
        this.state = {
            isLogin: true,
            names: []
        }
    }

    //改变isLogin属性
    change = () => {
        this.setState({
            isLogin: false,

        })

    }

    render() {
        //截取names属性
        let { names } = this.state;
        let showView = this.state.isLogin ? <div>登录成功！</div> : <div>请登录！</div>
        return (
            <div>
                IF条件渲染:{showView}
                <button onClick={this.change}>
                    按钮
                </button>
                {
                    names.length > 0 ? 
                    <div>
                        {
                            //map遍历
                            names.map((element, index) => {
                                return <p key={index}>{element}</p>
                            })
                        }
                    </div>
                        :
                    <div>
                            请等待。。。
                    </div>
                }
            </div>

        )
    }
}