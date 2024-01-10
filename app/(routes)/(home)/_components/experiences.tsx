import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import IFPBIcon from '@/public/images/ifpb.png'
import RocketseatIcon from '@/public/images/rocketseat.png'
import UEPBIcon from '@/public/images/uepb.png'
import { DownloadIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export function Experiences() {
  const experiences = [
    {
      name: 'Universidade Estadual da Paraíba',
      image: UEPBIcon,
      description: 'Estudante em Ciência da Computação',
      year: '2023 - Atualmente',
      className: 'bg-zinc-100 p-1',
    },
    {
      name: 'Rocketseat',
      image: RocketseatIcon,
      description: 'Estudante em Desenvolvimento Full-stack',
      year: '2022 - 2023',
    },
    {
      name: 'Instituto Federal da Paraíba',
      image: IFPBIcon,
      description: 'Estudante em Técnico em Informática',
      year: '2020 - 2022',
      className: '',
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.name} className="flex items-start gap-x-2">
          <div className="rounded-full h-10 w-10 aspect-square flex justify-center items-center p-1">
            <Image
              src={exp.image}
              width={44}
              height={44}
              alt={exp.name}
              className={cn('rounded-full aspect-square', exp.className)}
            />
          </div>
          <div>
            <h3 className="font-bold">{exp.name}</h3>
            <p className="text-xs text-muted-foreground">{exp.description}</p>
            <p className="text-xs text-muted-foreground">{exp.year}</p>
          </div>
        </div>
      ))}
      <Button className="w-full" asChild>
        <Link
          href="/documents/Joao_Vitor_Dev_Frontend.pdf"
          download
          rel="noopener noreferrer"
          target="_blank"
          prefetch={false}
        >
          Baixar meu currículo
          <DownloadIcon className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  )
}
