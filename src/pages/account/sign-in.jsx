import React, { Component } from 'react'
import { subscribe } from 'horizon-react'

import ButtonCircle from 'rebass/dist/ButtonCircle'

import FaFacebook from 'react-icons/lib/fa/facebook'
import FaGithub from 'react-icons/lib/fa/github'

@subscribe()
export default class AccountSignIn extends Component {
  render () {
    return (
      <div>

        <ButtonCircle title="Like" onClick={this.auth('facebook')}>
          <FaFacebook />
        </ButtonCircle>

        <ButtonCircle title="Like" onClick={this.auth('github')}>
          <FaGithub />
        </ButtonCircle>

      </div>
    )
  }

  auth = ( provider ) => (
    () => {
      const { horizon } = this.props

      horizon
        .authEndpoint( provider )
        .subscribe( (endpoint) => window.location.replace(endpoint) )
    }
  )
}
