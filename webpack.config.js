var path = require('path')
var srcPath = path.join(__dirname, 'src')
var buildPath = path.join(__dirname, 'dist')

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'index.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
}
