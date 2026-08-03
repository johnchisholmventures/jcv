import cn from 'classnames'
import type { ReactNode } from 'react'

export default function Container({
  children,
  className,
  fullWidthOnMobile = false,
}: {
  children: ReactNode
  className?: string
  fullWidthOnMobile?: boolean
}) {
  return (
    <div
      className={cn(
        fullWidthOnMobile ? 'px-0 md:px-5' : 'px-5',
        'container mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}
