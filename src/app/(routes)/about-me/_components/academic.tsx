import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface AcademicProps {
  icon: string
  title: string
  children: React.ReactNode
  description: string
  period: string
}

export function Academic({
  icon,
  description,
  children,
  period,
  title,
}: AcademicProps) {
  return (
    <Card className="border-0">
      <CardHeader className="px-2 pb-2 md:px-6 md:pb-6">
        <CardTitle className="text-xl">
          <div className="flex items-center gap-x-3">
            <Image
              src={icon}
              width={32}
              height={32}
              alt=""
              className="rounded-full aspect-square"
            />
            {title}
          </div>
        </CardTitle>
        <CardDescription className="ml-12">
          {description}, <span className="text-xs text-sky-500">{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 md:p-6 md:pt-0 md:ml-12">
        {children}
      </CardContent>
    </Card>
  )
}
