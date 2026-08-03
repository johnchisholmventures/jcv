import Container from '@/components/Container'
import TinaContent from '@/components/TinaContent'
import { client } from '@/tina/__generated__/client'
import cn from 'classnames'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investments',
}

function Investment({
  picture,
  name,
  site,
  description,
}: {
  picture?: string | null
  name?: string | null
  site?: string | null
  description?: string | null
}) {
  const content = (
    <div className="w-64 mx-auto">
      {picture ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="h-12 mx-auto object-contain"
          src={picture}
          alt={name || ''}
        />
      ) : null}
      <p className="text-default-grey text-lg">{name}</p>
      {description ? (
        <p className="text-default-grey italic text-xs">{description}</p>
      ) : null}
    </div>
  )

  return (
    <div
      className={cn(
        { 'hover:bg-gray-100': site },
        'w-full sm:w-1/2 md:w-1/3 relative p-4 box-border text-center self-center'
      )}
    >
      {site ? (
        <a href={site} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}

export default async function InvestmentsPage() {
  const [pageRes, invRes] = await Promise.all([
    client.queries.page({ relativePath: 'investments.md' }),
    client.queries.investmentConnection({ last: 50 }),
  ])

  const investments = (invRes.data.investmentConnection?.edges || [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

  return (
    <Container>
      <h1 className="post-title">Our Investments</h1>
      <TinaContent content={pageRes.data.page.body} />
      <div className="flex flex-row flex-wrap justify-start">
        {investments.map((item) => (
          <Investment
            key={item.id || item.name}
            picture={item.picture}
            name={item.name}
            site={item.site}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  )
}
