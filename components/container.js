import cn from 'classnames'

export default function Container({ children, className, fullWidthOnMobile}) {
  return <div className={cn(`container ${fullWidthOnMobile ? 'px:0 md:px-5' : 'px-5'}`, className)}>{children}</div>
}
