import {
  BackpackIcon,
  ClipboardIcon,
  DesktopIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons'

import { Description } from '@/components/layout/description'
import { Tech } from '@/components/layout/tech'
import { Project } from '@/components/project'
import { linkedinLink } from '@/data/links'
import { getMostUsedTechs } from '@/data/stacks'

import { Academic } from './_components/academic'
import { CardInfo } from './_components/card-info'
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
        <Description className="text-justify">
          Olá! me chamo João Vitor, sou um desenvolvedor web especializado em{' '}
          <span className="text-foreground">TypeScript e Node.js</span>, com
          forte expertise em criar sistemas corporativos escaláveis, interfaces
          envolventes e aplicativos sofisticados. Minha experiência abrange o
          uso de frameworks como{' '}
          <span className="text-foreground">
            React.js, Next.js, Nest.js e Fastify
          </span>
          , proporcionando soluções integradas e eficientes. Além disso, possuo
          sólido conhecimento em gestão e manipulação de bancos de dados,
          incluindo <span className="text-foreground">MySQL e PostgreSQL</span>,
          garantindo que suas aplicações sejam robustas e bem estruturadas.
          Estou comprometido em entregar projetos que não apenas atendam, mas
          superem suas expectativas.
        </Description>
      </CardInfo>
      <div className="w-full block space-y-6 md:flex md:space-y-0 md:items-center md:justify-between md:gap-x-6">
        <CardInfo
          orientation="vertical"
          title="Formações"
          icon={BackpackIcon}
          href={linkedinLink}
          linkLabel="Me contrate"
        >
          <Academic />
        </CardInfo>
        <CardInfo
          orientation="vertical"
          title="Tecs que mais utilizo"
          icon={LightningBoltIcon}
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
        <div className="space-y-8">
          <Project
            title="Supportify"
            description="Um site que tem como objetivo gerenciar os atendimentos de um usuário ou empresa. Você pode cadastrar tanto clientes quanto atendimentos referentes aos seus clientes."
            githubUrl="https://github.com/joaovlsousa/supportify"
            imageUrl="/projects/support-management.png"
          />
        </div>
      </CardInfo>
    </>
  )
}
