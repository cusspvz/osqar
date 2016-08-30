import 'file?name=index.html!./index.html'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Provider from './provider'
import Routes from './routes'
import { configureHorizon } from './horizon'
import { configureStore } from './store'
import history from './history'
import { syncHistoryWithStore } from 'react-router-redux'

// Create Redux store with initial state
export const horizon = configureHorizon()
export const store = configureStore()
export const routes = Routes({ store, horizon }, {
  history: syncHistoryWithStore( history, store )
})

// dispatch initial auth before rendering
// import { init } from './actions'
// const storeReady = store.dispatch( init( store ) )
//
// storeReady.then(() => {
  render(
    <Provider store={store} horizon={horizon} routes={routes} />,
    document.getElementById( 'rt' )
  )
// })
