import {
  BackpackIcon,
  ClipboardIcon,
  DesktopIcon,
  LaptopIcon,
} from '@radix-ui/react-icons'

import { getMostUsedTechs } from '@/data/stacks'
import { linkedinLink } from '@/lib/data/links'

import { Tech } from '@/components/tech'
import { CardInfo } from './_components/card-info'
import { Experiences } from './_components/experiences'
import { Header } from './_components/header'

export default function Home() {
  const mostUsedTechs = getMostUsedTechs()

  return (
    <>
      <Header />
      <CardInfo
        title="Sobre mim"
        icon={ClipboardIcon}
        href="/about-me"
        linkLabel="Saiba mais"
      >
        <p className="text-muted-foreground leading-relaxed">
          Olá, meu nome é João Vitor, sou um desenvolvedor front-end muito
          dedicado, tenho experiência nas tecnologias mais atuais do mercado
          como{' '}
          <span className="text-foreground font-medium">
            NextJS, ReactJS, TypeScript
          </span>
          , entre outros. Gosto de soluções robustas e amigáveis ao usuário,
          priorizando escalabilidade, acessibilidade e performance.
        </p>
      </CardInfo>
      <div className="w-full block space-y-6 md:flex md:space-y-0 md:items-center md:justify-between md:gap-x-6">
        <CardInfo
          orientation="vertical"
          title="Experiências"
          icon={BackpackIcon}
          href={linkedinLink}
          linkLabel="Me contrate"
        >
          <Experiences />
        </CardInfo>
        <CardInfo
          orientation="vertical"
          title="Tecs que mais utilizo"
          icon={LaptopIcon}
          href="/uses"
          linkLabel="Ver todas"
        >
          <div className="grid grid-cols-2 gap-2">
            {mostUsedTechs.map((tech) => (
              <Tech key={tech.name} {...tech} />
            ))}
          </div>
        </CardInfo>
      </div>
      <CardInfo
        title="Projetos"
        icon={DesktopIcon}
        href="/projects"
        linkLabel="Ver todos"
      >
        <p>TODO: Projects</p>
      </CardInfo>
    </>
  )
}
