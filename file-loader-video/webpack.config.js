const path = require('path');
const ExtractText = require('mini-css-extract-plugin');

module.exports = {
	mode: 'none',
	entry: path.resolve( __dirname,'./src/js/index.js'),
	output: {
		path: path.resolve( __dirname, 'dist'),
		filename: 'test.js',
		publicPath: './dist/'
	},
	module:{
		rules: [
			{
				//que tipo de archivo quiero reconocer
				test: /\.js$/, 
				//que loader usar
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				//que tipo de archivo quiero reconocer
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/, 
				//que loader usar
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			},
			{
				//que tipo de archivo quiero reconocer
				test: /\.(mp4|webm)$/, 
				//que loader usar
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: 'video/[name].[hash].[ext]'
					}
				}
			},
			{
				//que tipo de archivo quiero reconocer
				test: /\.css$/, 
				//que loader usar
				use: [ExtractText.loader, 'css-loader']
			}
		]
	},
	plugins: [
		new ExtractText({
			filename: 'css/[name].css'
		})
	]
}