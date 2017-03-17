var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// 常用路径
var ROOT_PATH = path.join(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'app');
var BUILD_PATH = path.join(ROOT_PATH, 'build')


module.exports = {
	entry: path.resolve(APP_PATH, 'app.jsx'),

	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},

	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: BUILD_PATH,
		port: '8086'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.sass', 'css']
	},

	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.jsx?$/,
			loaders: ['babel-loader']
		}]
	},

	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		title: 'My test'
	// 	})
	// ]

}