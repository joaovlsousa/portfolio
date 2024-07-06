import Image from 'next/image'

import { nats } from '@/fonts'
import { cn } from '@/lib/utils'

export function Logo() {
  return (
    <div className="flex">
      <Image
        src="logo-light.svg"
        alt="Logo"
        width={64}
        height={64}
        className="hidden dark:block"
      />
      <Image
        src="logo-dark.svg"
        alt="Logo"
        width={64}
        height={64}
        className="block dark:hidden"
      />
      <h1 className={cn('uppercase', nats.className)}>dev</h1>
    </div>
  )
}
