import Link from 'next/link'

export default function BackLink({
  href = '/',
  label = 'Back to home',
}: {
  href?: string
  label?: string
}) {
  return (
    <Link
      href={href}
      className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-violet no-underline hover:text-violet-dark"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 8H3M7 4L3 8l4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </Link>
  )
}
