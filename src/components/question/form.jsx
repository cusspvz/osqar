import React, { Component, PropTypes } from 'react'
import languages from '../../data/languages'
import md from '../../utils/md'

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

\`\`\`nome_do_ficheiro.js
// Código com highlights de Javascript ( reparem no js no nome do ficheiro )

var exemplo = "de código JS"
var exemplo2

console.log( typeof exemplo, typeof exemplo2 )
\`\`\`

\`\`\`iniciar.sh
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
    edit: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  state = {
    ...this.props.data,
  }

  render () {
    const { edit } = this.props
    const { title, body, language } = this.state

    return (
      <Flex wrap>
        <Box p={2} col={12} sm={6}>
          <Heading level={4} mb={2}>
            {edit ?
              "Editar uma pergunta" :
              "Criar uma nova pergunta"
            }
          </Heading>

          <form onSubmit={this.handleSubmit}>
            <Select
              name='language'
              label='Língua de Programação'
              value={language}
              onChange={this.handleLanguageChange}
              options={languages.map(({ id, name }) => ({ value: id, children: name }) )}
            />

            <Input
              name='title'
              label='Pergunta'
              placeholder={TITLE_PLACEHOLDER}
              value={title}
              onChange={this.handleTitleChange}
            />

            <Textarea
              name='body'
              label='Descrição'
              placeholder={BODY_PLACEHOLDER}
              value={body}
              rows={10}
              onChange={this.handleBodyChange}
            />
            <Message inverted theme="info">
              <FaInfo /> A descrição da pergunta suporta formatação Markdown!
            </Message>

            <Button type="submit">
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

            <div dangerouslySetInnerHTML={{ __html: md.render( body || BODY_PLACEHOLDER ) }} />
          </Box>
        </Box>
      </Flex>
    )
  }

  handleTitleChange = (e) => this.setState({ title: e.target.value })
  handleLanguageChange = (e) => this.setState({ language: e.target.value })
  handleBodyChange = (e) => this.setState({ body: e.target.value })
  handleSubmit = (e) => e && e.preventDefault()
  handleCancel = (e) => e && e.preventDefault()

}
