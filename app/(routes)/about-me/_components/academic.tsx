import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface AcademicProps {
  title: string
  children: React.ReactNode
  description: string
  period: string
}

export function Academic({
  description,
  children,
  period,
  title,
}: AcademicProps) {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>
          {description}, <span className="text-xs text-sky-500">{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </CardContent>
    </Card>
  )
}
