var config = require( './' )
var ENV = require( './env' )

config.loader( 'sounds', {
  test: /\.(wav|ogg|mp3)$/,
  loader: 'file?name=snd/[hash].[ext]'
})

// User null loader in case we are working with the server
if ( ENV.SERVER ) {
  config.removeLoader( 'sounds' )

  config.loader( 'sounds', {
    test: /\.(wav|ogg|mp3)$/,
    loader: 'null'
  })
}
