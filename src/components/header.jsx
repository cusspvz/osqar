import React, { Component } from 'react'
import { subscribe } from 'horizon-react'
import Toolbar from 'rebass/dist/Toolbar'
import NavItem from 'rebass/dist/NavItem'
import Space from 'rebass/dist/Space'
import InlineForm from 'rebass/dist/InlineForm'
import Dropdown from 'rebass/dist/Dropdown'
import DropdownMenu from 'rebass/dist/DropdownMenu'
import Button from 'rebass/dist/Button'
import Arrow from 'rebass/dist/Arrow'
import Link from 'react-router/lib/Link'

import GoCode from 'react-icons/lib/go/code' // you're drunk
import GoQuestion from 'react-icons/lib/go/question'
import GoPlus from 'react-icons/lib/go/plus'
import GoBook from 'react-icons/lib/go/book'
import GoPerson from 'react-icons/lib/go/person'
import GoSearch from 'react-icons/lib/go/search'

@subscribe()
export default class AppHeader extends Component {

  state = {
    createDropdownOpen: false
  }

  render () {
    const { horizon } = this.props
    const { createDropdownOpen } = this.state

    return (
      <Toolbar>
        <Space col="1" />

        <NavItem is={Link} to="/">
          <GoCode size={25} style={{ margin: '0 3px' }} /> OSQAR
        </NavItem>
    {/*
        <Space x={1} />

        <InlineForm
          buttonLabel={<GoSearch />}
          label="InlineForm"
          name="search"
          onChange={function noRefCheck() {}}
          onClick={function noRefCheck() {}}
        /> */}

        <Space auto />
    {/*
        <NavItem is={Link} to="/questions">
          <GoQuestion style={{ marginRight: 3 }} /> Perguntas
        </NavItem>

        <NavItem is={Link} to="/tutorials">
          <GoBook style={{ marginRight: 3 }} /> Tutoriais
        </NavItem> */}

        <Dropdown>
          <Button backgroundColor="white" color="black" onClick={this.toggleCreateDropdown()}>
            <GoPlus /> Criar
            <Arrow direction="down" />
          </Button>
          <DropdownMenu open={createDropdownOpen} onDismiss={this.toggleCreateDropdown( false )}>
            <NavItem is={Link} to="/question/new" onClick={this.toggleCreateDropdown(false)}>
              <GoQuestion style={{ marginRight: 4 }}/> Pergunta
            </NavItem>
            <NavItem is={Link} to="/tutorial/new" onClick={this.toggleCreateDropdown(false)}>
              <GoBook style={{ marginRight: 4 }}/> Tutorial
            </NavItem>
          </DropdownMenu>
        </Dropdown>

        {horizon.hasAuthToken() && (
          <NavItem is={Link} to="/account">
            <GoPerson /> Conta
          </NavItem>
        )}

        {! horizon.hasAuthToken() && (
          <NavItem is={Link} to="/account/sign-in">
            <GoPerson /> Entrar
          </NavItem>
        )}

        <Space col="1" />
      </Toolbar>
    )
  }

  toggleCreateDropdown = ( force ) => {
    return () => {
      const { createDropdownOpen } = this.state
      this.setState({ createDropdownOpen: force ? force : ! createDropdownOpen })
    }
  }

}
