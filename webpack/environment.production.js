var Webpack = require( 'webpack' )
var config = require( './' )
var ENV = require( './env' )

// In case we are working with production environment
if ( ENV.PRODUCTION ) {
  // Dedupe
  config.plugin( 'dedupe', Webpack.optimize.DedupePlugin, [])

  // Optimize chunks
  config.plugin( 'min-chunk-size', Webpack.optimize.MinChunkSizePlugin, [{ minChunkSize: 10000 }])
}
