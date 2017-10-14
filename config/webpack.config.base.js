var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var PurifyCSSPlugin = require('purifycss-webpack');
var glob = require('glob');
var path = require('path');
var outputFile = 'vue-responsive-calendar'
var globalName = 'VueResponsiveCalendar'

var config = require('../package.json')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            sass: ExtractTextPlugin.extract({
              use: ['css-loader','sass-loader']
            }),
            scss: ExtractTextPlugin.extract({
              use: ['css-loader','sass-loader']
            }),
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
    new ExtractTextPlugin(outputFile + '.css'),
    new PurifyCSSPlugin({
      moduleExtensions: ['.vue'],
      minimize: true,
      purifyOptions: {
        whitelist: ['btn-active']
      },
      paths: glob.sync(path.join(__dirname, 'src/components/*.vue')),
    })
  ],
}
