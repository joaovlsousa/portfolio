import Image from 'next/image'

import { nats } from '@/fonts'
import { cn } from '@/lib/utils'

export function Logo() {
  return (
    <div className="flex items-center gap-x-4">
      <Image
        src="logo-ligth.svg"
        alt="Logo"
        width={32}
        height={32}
        className="hidden dark:block"
      />
      <Image
        src="logo-dark.svg"
        alt="Logo"
        width={32}
        height={32}
        className="block dark:hidden"
      />
      <h1 className={cn('text-3xl uppercase', nats.className)}>joaols</h1>
    </div>
  )
}
