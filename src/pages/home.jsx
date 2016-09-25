import React, { Component } from 'react'
import { subscribe } from 'horizon-react'

import Flex from 'reflexbox/dist/Flex'
import Banner from 'rebass/dist/Banner'
import Container from 'rebass/dist/Container'
import Stat from 'rebass/dist/Stat'
import Heading from 'rebass/dist/Heading'
import Section from 'rebass/dist/Section'
import SectionHeader from 'rebass/dist/SectionHeader'

import GoOrganization from 'react-icons/lib/go/organization'
import GoCommentDiscussion from 'react-icons/lib/go/comment-discussion'
import GoQuestion from 'react-icons/lib/go/question'
import GoBook from 'react-icons/lib/go/book'

import QuestionResume from '../components/question/resume'
import TutorialResume from '../components/tutorial/resume'

const HomePage = ({
  last_questions, last_tutorials,
  questions_count, tutorials_count, comments_count, users_count
}) => (
  <div>

    <Banner
      backgroundImage="https://unsplash.it/1280/1280?image=3&blur"
    >

      <Heading level={1} style={{ fontWeight: 100 }}>
        QA sobre software
      </Heading>

      <Heading level={4} style={{ fontWeight: 100 }}>
        de portugueses para a comunidade portuguesa
      </Heading>
    </Banner>

{/*
    <div
      style={{
        background: '#efefef',
        height: '100vh'
      }}
    >
      <Container>
        <Flex wrap justify="space-between" align="center">
          <Stat
            label="Perguntas"
            value={questions_count}
          />
          <Stat
            label="Tutoriais"
            value={tutorials_count}
          />
          <Stat
            label="Comentários"
            value={comments_count}
          />
          <Stat
            label="Utilizadores"
            value={users_count}
          />
          <div style={{ height: '100vh' }} />
        </Flex>
      </Container>
    </div> */}

    <Container>
      <Section>
        <SectionHeader
          heading="Perguntas"
          description="Últimas 10 perguntas"
        />

        <Flex column>
          {
            last_questions.length === 0 && (
              <span style={{ textAlign: 'center' }}>
                Não existem questões publicadas
              </span>
            ) ||
            last_questions.map(
              question => (
                <QuestionResume key={question.id} question={question} />
              )
            )
          }
        </Flex>
      </Section>

      <Section>
        <SectionHeader
          heading="Tutoriais"
          description="Últimos 10 tutoriais"
        />

        <Flex column>
          {
            last_tutorials.length === 0 && (
              <span style={{ textAlign: 'center' }}>
                Não existem tutoriais publicados
              </span>
            ) ||
            last_tutorials.map(
              tutorial => (
                <TutorialResume key={tutorial.id} tutorial={tutorial} />
              )
            )
          }
        </Flex>

      </Section>
    </Container>
  </div>
)

export default subscribe({
  mapDataToProps: {
    last_questions: ( horizon ) => horizon( 'questions' ).limit(10),
    last_tutorials: ( horizon ) => horizon( 'tutorials' ).limit(10),
    // questions_count: ( horizon ) => horizon( 'questions' ).count(),
    // tutorials_count: ( horizon ) => horizon( 'tutorials' ).count(),
    // comments_count: ( horizon ) => horizon( 'comments' ).count(),
    // users_count: ( horizon ) => horizon( 'users' ).count(),
  }
})( HomePage )


//
// <Flex
//   justify="space-between"
//   wrap
// >
//   <Stat
//     label={<span><GoQuestion /> Perguntas</span>}
//     value="2"
//   />
//   <Stat
//     label={<span><GoCommentDiscussion /> Comentários</span>}
//     value="0"
//   />
//   <Stat
//     label={<span><GoBook /> Tutoriais</span>}
//     value="0"
//   />
//   <Stat
//     label={<span><GoOrganization /> Comunidade</span>}
//     value="1"
//   />
// </Flex>
