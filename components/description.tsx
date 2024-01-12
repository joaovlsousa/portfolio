import { cn } from '@/lib/utils'

interface DescriptionProps {
  children: React.ReactNode
  className?: string
}

export function Description({ children, className }: DescriptionProps) {
  return (
    <p
      className={cn('text-sm text-muted-foreground leading-relaxed', className)}
    >
      {children}
    </p>
  )
}
