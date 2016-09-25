import React, { Component } from 'react'
import QuestionForm from '../../components/question/form'

import Container from 'rebass/dist/Container'

export default class QuestionNew extends Component {
  render () {
    return (
      <Container>
        <QuestionForm />
      </Container>
    )
  }

  handleSubmit = (e) => e.preventDefault()

}
