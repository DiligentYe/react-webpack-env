// index.jsx 
// 引入react和react-dom模块
// 使用ES2015模块导入语法
import React from 'react';
import ReactDOM from 'react-dom';

// 引入自定义的hello.jsx
var text = require('./hello.jsx');

// 引入我们编写的sass文件
require('./index.scss');

// 编写一个简单的组件
class App extends React.Component {
	render(){
		return (
			<h1>{text}</h1>
		);
	}
};

// 创建一个组件实例，将组件挂载到文档结构中
ReactDOM.render(<App />, document.body);
