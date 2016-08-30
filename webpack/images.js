var config = require( './' )
var ENV = require( './env' )

config.loader( 'images', {
  test: /\.(png|jpe?g|gif|svg|ico)$/,
  loader: 'file?name=img/[hash].[ext]'
})

// User null loader in case we are working with the server
// if ( ENV.SERVER ) {
//   config.removeLoader( 'images' )
//
//   config.loader( 'images', {
//     test: /\.(png|jpe?g|gif|svg|ico)$/,
//     loader: 'null'
//   })
// }
