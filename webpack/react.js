var config = require( './' )
var ENV = require( './env' )

// Use react-hot on development
// if ( ENV.DEVELOPMENT ) {
//   config.postLoader( 'react-hot', {
//     test: /\.(js|jsx)$/,
//     exclude: /node_modules/,
//     loaders: [ 'react-hot' ]
//   })
// }

// Use chunk splitting on routes
// if ( ! ENV.DEVELOPMENT && ! ENV.CORDOVA && ! ENV.SERVER ) {
  // config.postLoader( 'react-router-chunks', {
  //   test: /\/pages\/.*\.jsx$/,
  //   exclude: /node_modules/,
  //   loaders: [ 'react-proxy-loader' ]
  // })
// }
