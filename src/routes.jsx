import React, { Component } from 'react'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import Redirect from 'react-router/lib/Redirect'

export default ({ store, horizon }, routerProps) => (
  <Router {...routerProps}>
    <Route component={require( './components/app' ).default}>
      <Route path="/" component={require( './pages/home' ).default} />

      <Route path="questions">
        <IndexRoute component={require( './pages/question/list' ).default} />

        <Route path=":id" component={require( './pages/question/page' ).default} />
        <Route path="new" component={require( './pages/question/new' ).default} />
      </Route>

      <Route path="account">
        <IndexRoute component={require( './pages/account/info' ).default} />

        <Route path="sign-in" component={require( './pages/account/sign-in' ).default} />
        {/* <Route path="sign-up" component={require( './pages/account/sign-up' ).default} /> */}
        <Route path="sign-out" component={require( './pages/account/sign-out' ).default} />
      </Route>
    </Route>
  </Router>
)
