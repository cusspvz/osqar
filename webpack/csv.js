var config = require( './' )

// Load up json files
config.loader( 'csv', {
  test: /\.csv$/,
  loader: 'dsv'
})
