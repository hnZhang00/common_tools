const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
  resolve: {
    extensions: ['.js'],
    alias: {
      'utils': path.resolve(__dirname, './src/utils')
    }
  },
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpe?g|svg|jpg|gif)$/,
				use: [
					'url-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'url-loader'
				]
			},
			{
				test: /\.ico$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'COMMON_TOOLS'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	}
}