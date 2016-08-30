import React, { Component } from 'react'
import { subscribe } from 'horizon-react'

import Flex from 'reflexbox/dist/Flex'
import Container from 'rebass/dist/Container'
import Stat from 'rebass/dist/Stat'
import Section from 'rebass/dist/Section'
import SectionHeader from 'rebass/dist/SectionHeader'

import GoOrganization from 'react-icons/lib/go/organization'
import GoCommentDiscussion from 'react-icons/lib/go/comment-discussion'
import GoQuestion from 'react-icons/lib/go/question'
import GoBook from 'react-icons/lib/go/book'

import QuestionResume from '../components/question/resume'
import TutorialResume from '../components/tutorial/resume'

const HomePage = ({ last_questions, last_tutorials }) => (
  <Container>

    <Section>
      <SectionHeader
        heading="Perguntas"
        description="Últimas 10 perguntas"
      />

      {last_questions.map(
        question => <QuestionResume key={question.id} question={question} />
      )}
    </Section>

    <Section>
      <SectionHeader
        heading="Tutoriais"
        description="Últimos 10 tutoriais"
      />

      {last_tutorials.map(
        tutorial => <TutorialResume key={tutorial.id} tutorial={tutorial} />
      )}
    </Section>

  </Container>
)

export default subscribe({
  mapDataToProps: {
    last_questions: ( horizon ) => horizon( 'questions' ).limit(10),
    last_tutorials: ( horizon ) => horizon( 'tutorials' ).limit(10),
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
