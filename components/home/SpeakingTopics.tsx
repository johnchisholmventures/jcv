import Link from 'next/link'

const TOPICS = [
  {
    category: 'Entrepreneurship',
    title: 'Discover and Build Your Ideal Business',
    description:
      'How aspiring and experienced entrepreneurs can identify unmet needs that align with their abilities, interests, relationships, and values.',
    audience: 'For founders, students, and entrepreneurship programs',
  },
  {
    category: 'Innovation',
    title: 'How Innovation Really Flourishes',
    description:
      'What companies, institutions, and governments often misunderstand about experimentation, competition, freedom, and the emergence of transformative ideas.',
    audience: 'For business leaders, universities, and policy organizations',
  },
  {
    category: 'Artificial Intelligence',
    title: 'Regulating Technologies with Unknowable Risks',
    description:
      'A framework for responding to AI and other emerging technologies without pretending we can predict every consequence—or suffocating beneficial innovation.',
    audience: 'For technology, policy, and governance audiences',
  },
  {
    category: 'Personal Development',
    title: 'Building Deliberate Self-Confidence',
    description:
      'Practical lessons from entrepreneurship about developing the confidence to act, recover from setbacks, and make decisions under uncertainty.',
    audience: 'For founders, students, and leadership audiences',
  },
]

export default function SpeakingTopics() {
  return (
    <section
      id="speaking-topics"
      className="scroll-mt-24 py-16 md:py-20 lg:py-24"
      aria-labelledby="topics-heading"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 id="topics-heading" className="section-heading text-3xl md:text-4xl lg:text-[2.65rem]">
            Let’s explore together
          </h2>
          <p className="lede mt-5">
            Drawing on experience as a founder, CEO, investor, and educator,
            John combines firsthand stories with practical frameworks for
            understanding entrepreneurship, regulation, innovation, higher
            education, and economic growth.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {TOPICS.map((topic) => (
            <li key={topic.title}>
              <article className="card-surface flex h-full flex-col p-6 md:p-7">
                <p className="eyebrow text-[0.7rem]">{topic.category}</p>
                <h3 className="font-display mt-3 text-xl text-foreground md:text-[1.35rem]">
                  {topic.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-muted">
                  {topic.description}
                </p>
                <p className="mt-5 border-t border-divider pt-4 text-sm text-muted">
                  {topic.audience}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/contact" className="text-link">
            Start a conversation
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
