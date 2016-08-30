var Webpack = require( 'webpack' )
var config = require( './' )
var ENV = require( './env' )

var replacements = {}

for ( var key in ENV ) {
  var value = JSON.stringify( ENV[ key ] )
  replacements[ 'ENV.' + key ] = value
  replacements[ 'process.env.' + key ] = value
}

config.plugin( 'define-env', Webpack.DefinePlugin, [ replacements ])
