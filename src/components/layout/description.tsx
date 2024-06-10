import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export function Description({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-sm text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  )
}
