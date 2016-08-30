import React, { Component } from 'react'
// import { Provider as Connector } from 'react-redux'
import { Connector } from 'horizon-react'
import StyleProvider from './style/provider'

export default ({ store, horizon, routes }) => (
  <StyleProvider>
    <Connector store={store} horizon={horizon}>
      {routes}
    </Connector>
  </StyleProvider>
)
