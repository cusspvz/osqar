var Webpack = require( 'webpack' )
var Config = require( 'webpack-configurator' )
var path = require( 'path' )
var ENV = require( './env' )

const config = module.exports = new Config()

config.merge({
  output: {
    chunkFilename: '[chunkhash].js'
  },
  resolve: {
    root: [ path.join(__dirname, '..') ],
    modulesDirectories: [ 'node_modules' ],
    extensions: [ '', '.js', '.jsx', '.react.js', '.json', '.split.jsx', '.split.react.js' ]
  }
})

require( './define' )
require( './json' )
require( './csv' )
require( './babel' )
require( './react' )
// require( './styles' )
require( './images' )
// require( './fonts' )
// require( './sounds' )
require( './compression' )

// targets
if ( ENV.BROWSER ) require( './target.browser' )
if ( ENV.CORDOVA ) require( './target.cordova' )
if ( ENV.SERVER ) require( './target.server' )

// environments
if ( ENV.PRODUCTION ) require( './environment.production' )
if ( ENV.STAGING ) require( './environment.staging' )
if ( ENV.DEVELOPMENT ) require( './environment.development' )
