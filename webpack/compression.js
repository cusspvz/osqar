var Webpack = require( 'webpack' )
var config = require( './' )
var ENV = require( './env' )

// Compress things on production
if ( ENV.PRODUCTION || ENV.STAGING ) {

  config.plugin( 'compress', Webpack.optimize.UglifyJsPlugin, [
    {
      mangle: true,
      compress: {
        unsafe: false, // defaults: false
        warnings: false, // defaults: true
        sequences: true,
        properties: true,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        hoist_vars: false, // defaults: false
        if_return: true,
        join_vars: true,
        cascade: true,
        negate_iife: true,
        drop_console: true
      }
    }
  ])

}
