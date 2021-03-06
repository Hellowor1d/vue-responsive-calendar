var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var demo = require('./webpack.config.demo')
var path = require('path')

var outputFile = 'vue-responsive-calendar'
var globalName = 'VueResponsiveCalendar'

module.exports = [demo,merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    publicPath: "/dist/",
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})];
