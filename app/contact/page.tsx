import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Invite John to Speak',
  description:
    'Invite John Chisholm to speak at your conference, university, or organization. Include event date, location, audience, format, and preferred topic.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <PageShell>
      <BackLink />
      <PageHeader
        eyebrow="Speaking inquiry"
        title="Invite John to Speak"
        description="John is available for selected keynotes, fireside conversations, panels, university programs, and workshops on entrepreneurship, innovation, AI, regulation, and personal development."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6 md:p-8">
          <h2 className="font-display text-xl text-foreground">
            How to reach out
          </h2>
          <p className="mt-4 text-muted">
            A dedicated inquiry form will be connected here. Until then, use
            LinkedIn or X to send a speaking invitation, and include the
            details listed beside this card so the team can respond quickly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://www.linkedin.com/pub/john-chisholm/0/4/556"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Contact via LinkedIn
            </a>
            <a
              href="https://twitter.com/johndchisholm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Contact via X
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Prefer a form or email address? Share the preferred channel and it
            can be wired into this page.
          </p>
        </div>

        <div className="card-surface p-6 md:p-8">
          <h2 className="font-display text-xl text-foreground">
            Please include
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Event date and location</li>
            <li>Audience size and composition</li>
            <li>Format (keynote, panel, workshop, fireside chat)</li>
            <li>Preferred topic or theme</li>
            <li>Organizer contact information</li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/cv" className="btn btn-secondary">
              Download Speaker Information
            </a>
            <Link href="/#speaking-topics" className="btn btn-secondary">
              View speaking topics
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
