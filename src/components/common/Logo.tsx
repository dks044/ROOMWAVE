'use client'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

const Logo = ({
  size = 40,
  className,
}: {
  size?: number
  className?: string
}) => {
  return (
    <Link href="/" className={cn('inline-block', className)}>
      <Image
        src="/logo2.png"
        alt="ROOMWAVE logo"
        width={size}
        height={size}
        priority
      />
    </Link>
  )
}

export default Logo
