import React, { Component } from 'react'
import { subscribe } from 'horizon-react'
import Horizon from '@horizon/client'

@subscribe()
export default class AccountSignOut extends Component {

  componentDidMount () {
    setTimeout( this.doSignOut, 1000 )
  }

  render () {
    return (
      <div>
        A terminar a sessão...
      </div>
    )
  }

  doSignOut = () => {
    Horizon.clearAuthTokens()
    window.location = '/'
  }
}
