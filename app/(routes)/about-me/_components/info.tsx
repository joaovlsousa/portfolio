interface InfoProps {
  title: string
  children: React.ReactNode
}

export function Info({ children, title }: InfoProps) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="p-0.5 rounded-full bg-muted-foreground" />
      <div className="flex items-center gap-x-2">
        <h3 className="font-semibold">{title}: </h3>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}
