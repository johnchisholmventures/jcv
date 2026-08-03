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
      <PageHeader
        eyebrow="Educator resources"
        title="Unleash Your Inner Company for educators"
        description="Complimentary classroom copies may be available for qualified entrepreneurship educators who build a syllabus around the book."
      />

      <div className="mt-10 max-w-3xl">
        <TinaContent content={data.page.body} />
      </div>

      <div className="mt-12">
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
          Invite John to Speak
        </Link>
      </div>
    </PageShell>
  )
}
