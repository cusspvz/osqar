import React, { Component } from 'react'
import md from './index'

export default class MarkdownComponent extends Component {
  render () {
    return (
      <div dangerouslySetInnerHTML={{ __html: md.render( this.props.body ) }} />
    )
  }
}
