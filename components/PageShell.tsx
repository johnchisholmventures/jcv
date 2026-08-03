import type { ReactNode } from 'react'
import cn from 'classnames'

export default function PageShell({
  children,
  className,
  contentClassName,
  narrow = false,
  bordered = true,
}: {
  children: ReactNode
  className?: string
  contentClassName?: string
  /** Constrain main reading column (articles, long prose) */
  narrow?: boolean
  bordered?: boolean
}) {
  return (
    <div className={cn(bordered && 'border-b border-divider', className)}>
      <div
        className={cn(
          'site-container py-12 md:py-16 lg:py-20',
          narrow && 'max-w-[48rem]',
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
