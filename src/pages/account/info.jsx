import React, { Component } from 'react'
import { subscribe } from 'horizon-react'
import Link from 'react-router/lib/Link'

import Container from 'rebass/dist/Container'
import Flex from 'reflexbox/dist/Flex'
import ButtonOutline from 'rebass/dist/ButtonOutline'

@subscribe()
export default class AccountInfo extends Component {
  render () {
    return (
      <Container>

        <ButtonOutline is={Link} to="/account/sign-out">
          Sair
        </ButtonOutline>

      </Container>
    )
  }
}
