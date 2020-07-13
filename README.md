This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 知识准备
1.JavaScript
2.HTML,CSS
3.构建工具Webpack
4.安装node npm
5.安装cnpm命令
6.官网文档

## 初始化项目
npx create-react-app 项目名
npm start

## 环境介绍
node_modules:依赖
public:入口文件
src:源码

## React基础知识
### JSX语法介绍
JSX语法:JavaScript +XML 语法
解读jsx语法：遇到<>按照html语法解析，遇到{}按照JavaScript语法解析

## 组件
组件的后缀可以是js也可以是jsx
一个React项目是由成千上万个组件组成

## props属性
组件的复用性

## React的生命周期函数
函数列表:
compoentWillMount:在组件渲染之前执行
compoentDidMount:在组件之后执行
shouldCompoentUpdate:返回true和false,true代表允许改变,false代表不允许改变
compoentWillUpdate:数据在改变之前执行(state,props)
compoentDidUpdate:数据修改完成(state,props)
compoentWillReceiveProps:props发生改变
compoentWillUnmount:组件卸载前执行
子传父以及父传子

## setState更新是同步还是异步
setState会引起视图的重绘
在可控的情况下是异步，在非可控的情况下是同步

## 列表渲染 key的問題

## 状态的提升
组件之间数据的交互