const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './app.js'	
	},
	output: {
		filename: '_build/bundle.js'
	},
	module: {
		loaders:[
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2016-native-modules']
			}
		}
	  ]
	},
	plugins: [
	//ulgify js
	new webpack.optimize.UglifyJsPlugin({
		compress:{ warnings: false },
		output: { comments: false },
		sourceMap: true
	}),
// env plugin
	new webpack.DefinePlugin({
		'_process.env_': { NODE_ENV: JSON.stringify(nodeEnv)}
	})
	]
}