import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import history from './history'

import thunk from 'redux-thunk'
import rootReducer from './reducers'

export function configureStore ( initialState = {} ) {
  const hasDevTools = 'devToolsExtension' in window

  let enhancers = []

  // Allow async actions
  enhancers.push( applyMiddleware( thunk ) )

  // Let react-router dispatch actions through react-router-redux
  enhancers.push( applyMiddleware( routerMiddleware( history ) ) )

  // Allow chrome store redux dev tools access
  if ( process.env.NODE_ENV == 'development' && hasDevTools ) {
    enhancers.push( window.devToolsExtension() )
  }

  // Create store
  const store = createStore(
    rootReducer,
    initialState,
    enhancers.length ? compose.apply( undefined, enhancers ) : f => f
  )

  if ( module.hot ) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require( './reducers' )
      store.replaceReducer( nextReducer )
    })
  }

  return store
}
