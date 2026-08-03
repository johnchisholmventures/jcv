import type { ReactNode } from 'react'
import cn from 'classnames'

export default function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
  children?: ReactNode
}) {
  return (
    <header className={cn('max-w-3xl', className)}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h1 className="font-display text-3xl text-foreground md:text-4xl lg:text-[2.75rem]">
        {title}
      </h1>
      {description ? (
        <div className="lede mt-5 text-muted">{description}</div>
      ) : null}
      {children}
    </header>
  )
}
