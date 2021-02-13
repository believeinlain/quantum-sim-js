const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: {
    app: path.resolve(appDirectory, 'src/main.js')
  },
  output: {
    path: path.resolve(appDirectory, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    contentBase: path.resolve(appDirectory, './'),
    publicPath: '/',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(appDirectory, 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: []
  },
  mode: 'development'
}