import React, { Component } from 'react'
import Footer from 'rebass/dist/Footer'
import NavItem from 'rebass/dist/NavItem'
import Space from 'rebass/dist/Space'

import GoHeart from 'react-icons/lib/go/heart'
import FaGithub from 'react-icons/lib/fa/github'

export default class FooterComponent extends Component {
  render () {
    return (
      <Footer justify="space-between">
        <Space col="1" />

        <NavItem is={'a'} target="_blank" href="https://github.com/cusspvz">
          Made with <GoHeart fill="red" style={{ margin: '0 4px' }}/> by José Moreira
        </NavItem>

        <NavItem is={'a'} target="_blank" href="https://github.com/cusspvz/osqar">
          <FaGithub style={{ margin: '0 4px' }}/> Source-code
        </NavItem>

        <Space auto />

        <NavItem is={'span'}>
          © 2016
        </NavItem>

        <Space col="1" />
      </Footer>
    )
  }
}
