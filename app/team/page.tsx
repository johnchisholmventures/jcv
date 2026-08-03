import Container from '@/components/Container'
import TinaContent from '@/components/TinaContent'
import { client } from '@/tina/__generated__/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
}

export default async function TeamPage() {
  const { data } = await client.queries.teamConnection({ last: 50 })
  const persons = (data.teamConnection?.edges || [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

  return (
    <Container>
      <h1 className="post-title">Our Team</h1>
      {persons.map((person, index) => (
        <div key={person.id || person.name}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-center w-full md:w-1/3 flex-shrink-0">
              <div className="mt-0 md:mt-8">
                {person.picture ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="mx-auto rounded-full w-64 max-w-sm mb-4 object-cover"
                    src={person.picture}
                    alt={person.name || ''}
                  />
                ) : null}
                <h3 className="text-xl font-bold text-default-grey mb-2">
                  {person.name}
                </h3>
                <div className="flex justify-center gap-3 text-default-grey">
                  {person.twitter ? (
                    <a
                      href={person.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  ) : null}
                  {person.linkedIn ? (
                    <a
                      href={person.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex-1">
              <TinaContent content={person.body} />
            </div>
          </div>
          {index !== persons.length - 1 ? (
            <hr className="my-12 border-gray-200" />
          ) : null}
        </div>
      ))}
    </Container>
  )
}
