import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { getMostUsedTechs } from '@/data/stacks'

export function Header() {
  const techs = getMostUsedTechs().map(({ name }) => {
    return { name }
  })

  return (
    <header className="w-full flex items-center gap-x-6">
      <Image
        src="/images/profile.jpg"
        alt="Imagem de perfil"
        height={100}
        width={100}
        className="rounded-lg"
      />
      <div className="w-[calc(100%-124px)] md:w-full space-y-1">
        <h1 className="text-3xl font-bold">João Vitor</h1>
        <p className="text-muted-foreground">Desenvolvedor Front-end</p>
        <ScrollArea className="pb-3 lg:pb-0">
          <div className="flex items-center gap-x-4">
            {techs.map(({ name }) => (
              <Badge key={name} variant="secondary">
                {name}
              </Badge>
            ))}
          </div>
          <ScrollBar
            orientation="horizontal"
            className="h-1.5 text-foreground"
          />
        </ScrollArea>
      </div>
    </header>
  )
}
