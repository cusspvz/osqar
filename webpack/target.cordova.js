var Webpack = require( 'webpack' )
var CordovaPlugin = require( 'webpack-cordova-plugin' )
var path = require( 'path' )
var config = require( './' )
var ENV = require( './env' )

const FILE = path.join( __dirname, '../src/index.cordova.js' )
const BUILD_PATH = path.join( __dirname, '../build/cordova', ENV.CORDOVA_PLATFORM )

const PUBLIC_PATH =
  ENV.CORDOVA_ANDROID && 'file:///android_asset/www/' ||
  undefined

// Setup entry
config.merge({
  target: 'web',
  entry: [ 'babel-polyfill', FILE ],
  output: {
    path: BUILD_PATH,
    filename: 'index.js',
    // libraryTarget: 'commonjs'
    publicPath: PUBLIC_PATH,
  }
})

config.plugin( 'define-global', Webpack.DefinePlugin, [
  {
    'global': 'window'
  }
])

// Change entrypoint
// config.plugin( 'cordova', CordovaPlugin, [
//   {
//     // Location of Cordova' config.xml (will be created if not found)
//     config: 'cordova/config.xml',
//
//     // Set entry-point of cordova in config.xml
//     src: 'index.html',
//
//     // // Set `webpack-dev-server` to correct `contentBase` to use Cordova plugins.
//     platform: ENV.CORDOVA_PLATFORM,
//
//     // Set config.xml' version. (true = use version from package.json)
//     version: false,
//   }
// ])
