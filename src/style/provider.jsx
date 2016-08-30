import React, { Component, PropTypes } from 'react'
import config from './config'

export default class StyleProvider extends Component {
  static childContextTypes = {
    rebass: PropTypes.object
  }

  getChildContext () {
    return {
      rebass: config
    }
  }

  render () {
    return this.props.children
  }
}
