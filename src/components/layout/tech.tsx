import Image from 'next/image'

import { cn } from '@/lib/utils'

export interface TechProps {
  name: string
  icon: string
  invert?: boolean
  mostUsed?: boolean
}

export function Tech({ name, icon, invert }: TechProps) {
  return (
    <div className="relative flex items-center gap-3 rounded-md p-3 bg-muted hover:bg-primary/15 dark:hover:bg-primary/25 shadow-md text-accent-foreground transition-all cursor-pointer">
      <div
        className={cn(
          'p-2 flex items-center justify-center rounded-lg relative overflow-hidden',
          invert && 'dark:invert',
        )}
      >
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className="z-10"
          loading="lazy"
        />
        <Image
          src={icon}
          alt=""
          width={8}
          height={8}
          className="blur-lg absolute inset-0 w-[125%] h-[125%] opacity-80 z-0"
        />
      </div>
      <span className="text-xs md:text-sm">{name}</span>
    </div>
  )
}
