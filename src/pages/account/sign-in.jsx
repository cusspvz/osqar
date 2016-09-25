import React, { Component } from 'react'
import { subscribe } from 'horizon-react'

import Flex from 'reflexbox/dist/Flex'
import Box from 'reflexbox/dist/Box'
import Space from 'rebass/dist/Space'
import Container from 'rebass/dist/Container'
import ButtonOutline from 'rebass/dist/ButtonOutline'

import FaFacebook from 'react-icons/lib/fa/facebook'
import FaGithub from 'react-icons/lib/fa/github'

@subscribe()
export default class AccountSignIn extends Component {
  render () {
    return (
      <Container>

        <Flex wrap justify="center">
          <h4>Faz o teu login de forma fácil</h4>
        </Flex>

        <Flex wrap justify="center">

          <ButtonOutline title="Like" onClick={this.auth('facebook')}>
            <FaFacebook /> Facebook
          </ButtonOutline>
{/*
          <Space />

          <ButtonOutline title="Like" onClick={this.auth('github')}>
            <FaGithub /> GitHub
          </ButtonOutline> */}

        </Flex>

      </Container>
    )
  }

  auth = ( provider ) => (
    () => {
      const { horizon } = this.props

      horizon
        .authEndpoint( provider )
        .subscribe( ( endpoint ) => window.location.replace(endpoint) )
    }
  )
}
