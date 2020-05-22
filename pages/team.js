import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import TeamSection from '../components/team-section'
import PostTitle from '../components/post-title'
import SectionSeparator from '../components/section-separator'
import {getPageContent, johnFirst} from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

export default function Team({persons}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Our Team</title>
        </Head>
        <Container>
            <PostTitle>Our Team</PostTitle>
            {
              persons.map((person, index)=> (
                <div key={index}>
                  <TeamSection picture={person.picture} name={person.name} twitter={person.twitter} linkedIn={person.linkedIn}>
                    {person.content}
                  </TeamSection>
                  {
                    index !== persons.length -1
                    ? <SectionSeparator />
                    : null
                  }
                </div>
              ))
            }
        </Container>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const persons = await Promise.all(getPageContent('team', ['name', 'picture', 'twitter','linkedIn', 'content', 'slug'])
    .map(async person => ({...person, content: await markdownToHtml(person.content)})))
  return {
    props: {
      persons: johnFirst(persons)
    },
  }
}