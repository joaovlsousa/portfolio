import { ChevronRightIcon } from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import Link from 'next/link'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CardInfoProps {
  title: string
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  href: string
  linkLabel: string
  children: React.ReactNode
  orientation?: 'vertical' | 'horizontal'
}

export function CardInfo({
  children,
  href,
  icon: Icon,
  linkLabel,
  title,
  orientation = 'horizontal',
}: CardInfoProps) {
  return (
    <Card className={cn('w-full', orientation === 'vertical' && 'h-96')}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon className="w-5 h-5 mr-2 text-sky-500" />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <Button variant="link" size="sm" asChild>
            <Link href={href}>
              {linkLabel}
              <ChevronRightIcon className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
