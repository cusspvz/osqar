var config = require( './' )
var ENV = require( './env' )

config.loader( 'fonts', {
  test: /\.(otf|ttf|eot|svg|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file?name=fnt/[hash].[ext]'
})

// User null loader in case we are working with the server
if ( ENV.SERVER ) {
  config.removeLoader( 'fonts' )

  config.loader( 'fonts', {
    test: /\.(otf|ttf|eot|svg|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'null'
  })
}
