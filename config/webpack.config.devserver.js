var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var outputFile = 'vue-responsive-calendar'
var globalName = 'VueResponsiveCalendar'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.common.js',
    publicPath: "/assets/",    
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})
