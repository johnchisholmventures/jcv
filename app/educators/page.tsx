import BackLink from '@/components/BackLink'
import EducatorsGallery from '@/components/EducatorsGallery'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import TinaContent from '@/components/TinaContent'
import { client } from '@/tina/__generated__/client'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Educators',
  description:
    'Complimentary classroom copies of Unleash Your Inner Company may be available for qualified entrepreneurship educators.',
  alternates: { canonical: '/educators' },
}

export default async function EducatorsPage() {
  const { data } = await client.queries.page({
    relativePath: 'educators.md',
  })

  return (
    <PageShell>
      <BackLink href="/books" label="Back to books" />
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
        <figure className="mx-auto w-full max-w-[16rem] lg:mx-0 lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uyic_cover.jpg"
            alt="Cover of Unleash Your Inner Company by John Chisholm"
            className="w-full rounded-[var(--radius-card)] border border-divider shadow-[var(--shadow-elevated)]"
            width={400}
            height={600}
          />
        </figure>

        <div>
          <PageHeader
            eyebrow="Educator resources"
            title="Unleash Your Inner Company for educators"
            description="Complimentary classroom copies may be available for qualified entrepreneurship educators who build a syllabus around the book."
          />
          <div className="mt-8">
            <TinaContent content={data.page.body} />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl text-foreground md:text-[1.75rem]">
          Classroom moments
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Photos from entrepreneurship programs using the book.
        </p>
        <div className="mt-6">
          <EducatorsGallery />
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-divider pt-10 sm:flex-row sm:flex-wrap">
        <Link href="/uyic" className="btn btn-primary">
          Explore the book
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact John
        </Link>
      </div>
    </PageShell>
  )
}
