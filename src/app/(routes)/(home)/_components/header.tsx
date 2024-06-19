import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { githubProfileLink } from '@/data/links'
import { getMostUsedTechs } from '@/data/stacks'

export function Header() {
  const techs = getMostUsedTechs().map(({ name }) => {
    return { name }
  })

  return (
    <header className="w-full flex items-center gap-x-6">
      <Image
        src={githubProfileLink}
        alt="Imagem de perfil"
        height={100}
        width={100}
        priority
        className="rounded-full"
      />
      <div className="w-[calc(100%-124px)] lg:w-full space-y-0.5">
        <h1 className="text-2xl md:text-3xl font-bold">João Vitor</h1>
        <p className="text-sm md:text-bse text-muted-foreground">
          Desenvolvedor web, Full-stack.
        </p>
        <div className="flex items-center gap-x-4 overflow-x-auto py-2">
          {techs.map(({ name }) => (
            <Badge key={name} variant="secondary">
              {name}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  )
}
