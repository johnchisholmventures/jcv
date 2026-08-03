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
        'site-container',
        fullWidthOnMobile && 'px-0 md:px-7',
        className
      )}
    >
      {children}
    </div>
  )
}
