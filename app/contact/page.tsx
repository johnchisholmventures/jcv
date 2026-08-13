import BackLink from '@/components/BackLink'
import PageHeader from '@/components/PageHeader'
import PageShell from '@/components/PageShell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact John',
  description:
    'Contact John Chisholm about speaking, writing, workshops, entrepreneurship education, and selected advisory conversations.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <PageShell>
      <BackLink />
      <PageHeader
        eyebrow="Contact"
        title="What can John do for you?"
        description="John frequently speaks at universities and conferences and writes on entrepreneurship, regulation, innovation, higher education, and economic growth. Use this page to start a conversation about work where his experience may be useful."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6 md:p-8">
          <h2 className="font-display text-xl text-foreground">
            How to reach out
          </h2>
          <p className="mt-4 text-muted">
            A dedicated inquiry form will be connected here. Until then, use
            LinkedIn or X to contact John, and include enough context for a
            useful response.
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
            What John can help with
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>University and conference talks</li>
            <li>Entrepreneurship workshops and classroom programs</li>
            <li>Writing, essays, and commentary</li>
            <li>Discussions on regulation, innovation, and economic growth</li>
            <li>Selected board, advisory, and mentoring conversations</li>
          </ul>
          <div className="mt-8">
            <a href="/cv" className="btn btn-secondary">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 card-surface p-6 md:p-8">
        <h2 className="font-display text-xl text-foreground">
          What to include when you reach out
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A few details make it easier for John or his team to understand the
          opportunity and respond with the right next step.
        </p>
        <ul className="mt-5 grid gap-3 text-muted sm:grid-cols-2">
          <li className="border-t border-divider pt-3">
            Event or project date, if there is one
          </li>
          <li className="border-t border-divider pt-3">
            Location, audience, and format
          </li>
          <li className="border-t border-divider pt-3">
            Topic, theme, or question you want to explore
          </li>
          <li className="border-t border-divider pt-3">
            Best organizer contact information
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
