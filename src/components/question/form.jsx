import React, { Component, PropTypes } from 'react'
import languages from '../../data/languages'
import Markdown from '../../utils/md/component'
import noop from '../../utils/noop'
import buildError from '../../utils/build-error'

import { base as baseColors } from '../../style/colors'

import Flex from 'reflexbox/dist/Flex'
import Box from 'reflexbox/dist/Box'

import Heading from 'rebass/dist/Heading'
import Divider from 'rebass/dist/Divider'
import Message from 'rebass/dist/Message'
import Label from 'rebass/dist/Label'
import Input from 'rebass/dist/Input'
import Select from 'rebass/dist/Select'
import Radio from 'rebass/dist/Radio'
import Checkbox from 'rebass/dist/Checkbox'
import Textarea from 'rebass/dist/Textarea'
import Button from 'rebass/dist/Button'
import Space from 'rebass/dist/Space'

import FaInfo from 'react-icons/lib/fa/info'

const TITLE_PLACEHOLDER = `O que significa "undefined"?`
const BODY_PLACEHOLDER =
`Boas a todos,

este é um **exemplo** de como poderá ser redigida uma pergunta à comunidade.
Neste exemplo quero falar como posso facilmente incluir o meu código com a dúvida:

\`\`\`javascript
// Código com highlights de Javascript ( reparem no js no nome do ficheiro )

var exemplo = "de código JS"
var exemplo2

console.log( typeof exemplo, typeof exemplo2 )
\`\`\`

\`\`\`bash
#!/bin/bash
# Exemplo de highlight em bash

node nome_do_ficheiro.js
\`\`\`

É preferivel de que seja colocado o **código todo** na pergunta para referência
futura, mas podem _também incluir um link_ para um [jsbin](http://jsbin.com) ou
outro snippet editor online!

Caso necessitem de mostrar um resultado de user interface, podem também colocar
um link para uma imagem, adicionando um (ponto de exclamação) ao link da imagem.

![descrição da imagem](https://unsplash.it/500/200)

--
Obrigado,
José Moreira`


export default class QuestionForm extends Component {

  static propTypes = {
    editting: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  static defaultProps = {
    editting: false,
    onChange: noop,
    onSubmit: noop,
    onCancel: noop,
  }

  componentDidMount () {
    this.validate( false )
  }

  componentDidUpdate () {
    this.validate( false )
  }

  state = {
    loading: false,
    values: {
      ...this.props.data
    },
    errors: {}
  }

  render () {
    const { editting } = this.props
    const { values: { title, body, language }, errors } = this.state

    const warnings = this.warningErrors
    const fatals = this.fatalErrors

    return (
      <Flex wrap>
        <Box p={2} col={12} sm={6}>
          <Heading level={4} mb={2}>
            {editting ?
              "Editar uma pergunta" :
              "Criar uma nova pergunta"
            }
          </Heading>

          <form onSubmit={this.handleSubmit}>

            { fatals.length > 0 && (
              <Message inverted theme="error">
                {fatals.map(
                  (e) => <Box col={12}>{e.message}</Box>
                )}
              </Message>
            )}

            { warnings.length > 0 && (
              <Message inverted theme="warning">
                {warnings.map(
                  (e) => <Box col={12}>{e.message}</Box>
                )}
              </Message>
            )}

            <Select
              name='language'
              theme={errors.language && errors.language.theme || 'default'}
              label='Língua de Programação'
              value={language}
              onChange={this.handleLanguageChange}
              options={languages.map(({ id, name }) => ({ value: id, children: name }) )}
            />

            <Input
              name='title'
              theme={errors.title && errors.title.theme || 'default'}
              label='Pergunta'
              placeholder={TITLE_PLACEHOLDER}
              value={title}
              onChange={this.handleTitleChange}
            />

            <Textarea
              name='body'
              theme={errors.body && errors.body.theme || 'default'}
              label='Descrição'
              placeholder={BODY_PLACEHOLDER}
              value={body}
              rows={10}
              onChange={this.handleBodyChange}
            />
            <Message inverted theme="info">
              <FaInfo style={{ marginRight: 20 }}/> A descrição da pergunta suporta formatação Markdown!
            </Message>

            <Button type="submit" theme={fatals.length > 0 ? 'border': 'primary'}>
              Guardar
            </Button>
            <Space />
            <Button theme='secondary' onClick={this.handleCancel}>
              Cancelar
            </Button>

          </form>
        </Box>
        <Box p={2} col={12} sm={6}>
          <Heading level={4} mb={2}>
            {"Pré-visualização"}
          </Heading>

          <Box
            p={2}
            style={{ border: `1px solid ${baseColors.gray}`, overflow: 'scroll' }}
          >
            <Heading level={3} mb={1}>
              {title || TITLE_PLACEHOLDER}
            </Heading>

            <Divider />

            <Markdown body={body || BODY_PLACEHOLDER} />
          </Box>
        </Box>
      </Flex>
    )
  }

  get fatalErrors () {
    return Object.values( this.state.errors )
    .filter( error => error.type === 'fatal' )
  }

  get warningErrors () {
    return Object.values( this.state.errors )
    .filter( error => error.type === 'warning' )
  }

  handleTitleChange = (e) => {
    const { values } = this.state
    this.setState({ values: { ...values, title: e.target.value } })
  }

  handleLanguageChange = (e) => {
    const { values } = this.state
    this.setState({ values: { ...values, language: e.target.value } })
  }

  handleBodyChange = (e) => {
    const { values } = this.state
    this.setState({ values: { ...values, body: e.target.value } })
  }

  validate = ( force ) => {
    const { values: { language, title, body }, errors } = this.state

    const newErrors = {}
    let changed = false

    if ( force || typeof title != 'undefined' ) {
      try {

        if ( ! title ) {
          throw buildError({ field: 'title', message: "É necessário um título.", type: 'fatal', theme: 'error' })
        }

        if ( title.length > 120 ) {
          throw buildError({ field: 'title', message: "O título é muito longo.", type: 'fatal', theme: 'error' })
        }

        if ( title.length > 80 ) {
          throw buildError({ field: 'title', message: "O título deve ser explicito, tenta resumir o problema em poucas palavras.", type: 'warning', theme: 'warning' })
        }

        if ( ! changed && errors.title ) {
          changed = true
        }

      } catch ( err ) {
        newErrors.title = err

        if ( ! changed ) {
          changed = ! errors.title || errors.title.message !== err.message || false
        }
      }
    }

    if ( force || typeof body != 'undefined' ) {
      try {

        if ( ! body ) {
          throw buildError({ field: 'body', message: "É necessário uma descrição.", type: 'fatal', theme: 'error' })
        }

        if ( title.length < 80 ) {
          throw buildError({ field: 'body', message: "Tenta explicar detalhadamente o teu problema na descrição para que os membros consigam entende-lo melhor. Quanto melhor for a explicação, mais rápida será a resposta.", type: 'warning', theme: 'warning' })
        }

        if ( ! changed && errors.body ) {
          changed = true
        }

      } catch ( err ) {
        newErrors.body = err

        if ( ! changed ) {
          changed = ! errors.body || errors.body.message !== err.message || false
        }
      }
    }

    if ( changed ) {
      this.setState({ errors: newErrors })
    }

  }


  handleSubmit = async (e) => {
    e && e.preventDefault()

    const { state: { loading, values }, props: { onSubmit } } = this

    if ( loading || this.fatalErrors.length > 0 ) {
      return
    }

    this.setState({ loading: true })
    await onSubmit( values )
    this.setState({ loading: false })
  }

  handleCancel = async (e) => {
    e && e.preventDefault()

    const { state: { loading }, props: { onCancel } } = this

    if ( loading ) {
      return
    }

    onCancel( values )
  }

  handleChange = (e) => {
    e && e.preventDefault()

    const { state: { loading, values, errors }, props: { onChange } } = this

    if ( loading ) {
      return
    }

    onChange( values, errors )
  }

}
