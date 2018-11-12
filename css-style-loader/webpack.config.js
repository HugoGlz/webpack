const path = require('path')

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
				test: /\.css$/, 
				//que loader usar
				use: [
					{
						loader: 'style-loader'
					},{
						loader: 'css-loader'
					}
				]
			}
		]
	}
}