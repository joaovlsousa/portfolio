interface InfoProps {
  title: string
  children: React.ReactNode
}

export function Info({ children, title }: InfoProps) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="p-0.5 rounded-full bg-muted-foreground" />
      <div className="flex items-center gap-x-2 whitespace-nowrap overflow-x-auto pb-1">
        <h3 className="font-semibold">{title}: </h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}
