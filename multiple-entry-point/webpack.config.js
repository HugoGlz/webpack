const path = require('path');
const ExtractText = require('mini-css-extract-plugin');

module.exports = {
	mode: 'none',
	entry: {
		home: path.resolve( __dirname,'./src/js/index.js'),
		precios: path.resolve( __dirname,'./src/js/precios.js'),
		contacto: path.resolve( __dirname,'./src/js/contacto.js'),		
	},
	output: {
		path: path.resolve( __dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module:{
		rules: [
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