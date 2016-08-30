console.log( "Initializing build system" )

var ENV = module.exports = {}
ENV.NODE_ENV = process.env.NODE_ENV
ENV.TARGET = process.env.TARGET || 'browser'

// ENV
ENV.PRODUCTION = ENV.NODE_ENV === 'production'
ENV.STAGING = ENV.NODE_ENV === 'staging'
ENV.DEVELOPMENT = ENV.NODE_ENV === 'development'

if ( ! ENV.PRODUCTION && ! ENV.STAGING && ! ENV.DEVELOPMENT ) {
  throw new Error( "You must define a valid NODE_ENV" )
}

console.log( "ENVIRONMENT: " + ENV.NODE_ENV )

// TARGET
ENV.CORDOVA = ENV.TARGET === 'cordova'
ENV.BROWSER = ENV.TARGET === 'browser'
ENV.SERVER = ENV.TARGET === 'server'

if ( ! ENV.CORDOVA && ! ENV.BROWSER && ! ENV.SERVER ) {
  throw new Error( "You must define a valid TARGET" )
}

console.log( "TARGET: " + ENV.TARGET )

// PLATFORM, if CORDOVA
if ( ENV.CORDOVA ) {
  ENV.CORDOVA_PLATFORM = process.env.CORDOVA_PLATFORM || 'android'
  ENV.CORDOVA_IOS = ENV.CORDOVA_PLATFORM === 'ios'
  ENV.CORDOVA_ANDROID = ENV.CORDOVA_PLATFORM === 'android'

  console.log( "CORDOVA_PLATFORM: " + ENV.CORDOVA_PLATFORM )
}

// Others
ENV.DOMAIN = process.env.DOMAIN || 'localhost:8181'

ENV.ASSETS_PUBLIC_PATH =
  ENV.PRODUCTION && '/browser/' ||
  ENV.STAGING && '/browser/' ||
  ENV.DEVELOPMENT && '/browser/'

ENV.ASSETS_PATH = './dist/browser/'

ENV.HOSTNAME =
  ENV.PRODUCTION && 'www.' + ENV.DOMAIN ||
  ENV.STAGING && 'staging.' + ENV.DOMAIN ||
  ENV.DEVELOPMENT && 'development.' + ENV.DOMAIN
