var config = require( './' )

// Load up json files
config.loader( 'json', {
  test: /\.json$/,
  loader: 'json'
})
