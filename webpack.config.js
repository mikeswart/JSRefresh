var webpack = require('webpack');
var path = require('path');

module.exports = {  
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}