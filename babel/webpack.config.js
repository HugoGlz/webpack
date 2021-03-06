const path = require('path');
const ExtractText = require('mini-css-extract-plugin');

module.exports = {
	mode: 'none',
	entry: path.resolve( __dirname,'index.js'),
	output: {
		path: path.resolve( __dirname, 'dist'),
		filename: 'test.js'
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