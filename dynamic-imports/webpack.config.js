const path = require('path');
const ExtractText = require('mini-css-extract-plugin');
const webpack = require('webpack');
const modulesManifestJSON = require('./modules-manifest.json');

module.exports = {
	mode: 'none',
	entry: {
		home: path.resolve( __dirname,'./src/js/index.js'),
		contact: path.resolve( __dirname,'./src/js/contact.js')
	},
	output: {
		path: path.resolve( __dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: path.resolve( __dirname, 'dist') + "/",
		chunkFilename: 'js/[id].[chunkhash].js'
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
						presets: ['es2015','react'],
						plugins: ['syntax-dynamic-import']
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
			/*,
			{
				test: /\.json$/, 
				use: {
					loader: 'json-loader'
				}
			},*/
			{
				//que tipo de archivo quiero reconocer
				test: /\.css$/, 
				exclude: /node_modules/,
		        use: [
		          {
		            loader: 'style-loader',
		          },
		          {
		            loader: 'css-loader',
		            options: {
		            	importLoaders: 1,
				     	modules: true
		            }
		          },
		          {
		            loader: 'postcss-loader'
		          }
		        ]
			},
			{
				//que tipo de archivo quiero reconocer
				test: /\.scss$/, 
				//que loader usar
				use: [ExtractText.loader, "css-loader","sass-loader"] 
			},
			{
				//que tipo de archivo quiero reconocer
				test: /\.styl$/, 
				//que loader usar
				use: [ExtractText.loader, "css-loader", 
				{
					loader: "stylus-loader",
					options: {
						use: [
							require('nib'),
							require('rupture')
						],
						import: [
							'~nib/lib/nib/index.styl',
							'~rupture/rupture/index.styl',
						]																	 
					}
				}]
			}
		]
	},
	plugins: [
		new ExtractText({
			filename: 'css/[name].css'
		}),
		new webpack.DllReferencePlugin({
			manifest: modulesManifestJSON
		})
	]
}