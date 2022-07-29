const path = require('path')

module.exports = {
	mode: 'development',
	entry: path.resolve("index.js"),
	output: {
		path: path.resolve("dist"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	devServer: {
		open: true,
	}
}

