import React, { Component } from 'react'
import { subscribe } from 'horizon-react'
import Toolbar from 'rebass/dist/Toolbar'
import NavItem from 'rebass/dist/NavItem'
import Space from 'rebass/dist/Space'
import InlineForm from 'rebass/dist/InlineForm'
import Link from 'react-router/lib/Link'

import GoCode from 'react-icons/lib/go/code' // you're drunk
import GoQuestion from 'react-icons/lib/go/question'
import GoBook from 'react-icons/lib/go/book'
import GoPerson from 'react-icons/lib/go/person'
import GoSearch from 'react-icons/lib/go/search'

const AppHeader = ({ horizon }) => (
  <Toolbar>
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

    <Space auto x={1} />
{/*
    <NavItem is={Link} to="/questions">
      <GoQuestion style={{ marginRight: 3 }} /> Perguntas
    </NavItem>

    <NavItem is={Link} to="/tutorials">
      <GoBook style={{ marginRight: 3 }} /> Tutoriais
    </NavItem> */}

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

  </Toolbar>
)

export default subscribe()( AppHeader )
