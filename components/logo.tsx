import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({ subsets: ['latin'], weight: ['700'] })

export function Logo() {
  return <h1 className={cn('text-2xl font-bold', font.className)}>Joaov.</h1>
}
