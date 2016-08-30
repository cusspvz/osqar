var Webpack = require( 'webpack' )
var path = require( 'path' )
var config = require( './' )
var ENV = require( './env' )

const FILE = path.join( __dirname, '../src/index.browser.js' )
const BUILD_PATH = path.join( __dirname, '../build/browser' )

// Setup entry
config.merge({
  target: 'web',
  entry: [ 'babel-polyfill', FILE ],
  output: {
    path: BUILD_PATH,
    filename: 'index.js',
    chunkFilename: '[chunkhash].js',
    libraryTarget: 'umd',
    publicPath: ENV.ASSETS_PUBLIC_PATH,
  }
})

config.plugin( 'define-global', Webpack.DefinePlugin, [
  {
    'global': 'window',
  }
])
