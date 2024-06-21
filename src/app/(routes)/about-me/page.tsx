import { BackpackIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { Metadata } from 'next'

import { Description } from '@/components/layout/description'
import { Title } from '@/components/layout/title'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getMostUsedTechs } from '@/data/stacks'
import { getAge } from '@/lib/utils'

import { Academic } from './_components/academic'
import { Info } from './_components/info'

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: 'Descubra um pouco sobre minhas experiências',
}

export default function AboutMePage() {
  const age = getAge()
  const techs = getMostUsedTechs().map(({ name }) => ({ name }))

  return (
    <div className="space-y-6">
      <section className="space-y-6">
        <div className="flex items-center gap-x-3">
          <ClipboardIcon className="size-6 text-sky-500" />
          <Title>Sobre mim</Title>
        </div>
        <Card className="border-0 shadow-none">
          <CardContent className="space-y-2">
            <Info title="Nome">João Vitor;</Info>
            <Info title="Idade">{age} anos;</Info>
            <Info title="Localização">Paraíba, Brasil;</Info>
            <Info title="Especialidade">Desenvolvedor web, Full-stack;</Info>
            <Info title="Idiomas">
              Português (Nativo), Inglês (Intermediário);
            </Info>
            <Info title="Minha stack">
              <div className="flex items-center gap-x-2">
                {techs.map(({ name }, index) => {
                  if (index === techs.length - 1) {
                    return <span key={name}>{`${name};`}</span>
                  }

                  return <span key={name}>{`${name}, `}</span>
                })}
              </div>
            </Info>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-3">
        <div className="flex items-center gap-x-3">
          <BackpackIcon className="size-6 text-sky-500" />
          <Title>Formação acadêmica</Title>
        </div>
        <Academic
          title="Instituto Federal da Paraíba"
          icon="/images/ifpb.png"
          description="Ensino Médio + Técnico"
          period="2020 - 2022"
        >
          <Description className="text-justify">
            Tive a oportunidade de fazer o curso de Técnico em Informática
            integrado ao ensino médio. Durante minha formação realizei diversas
            atividades na área de informática, bem como a criação de diversas
            aplicações, gestão de redes de computadores e manipulação de
            servidores Linux. Também pude aprender várias habilidades úteis para
            o desenvolvimento de software, como o conceito de código limpo
            (Clean Code), além diversas metodologias que são utilizadas no
            processo de desenvolvimento de software, por exemplo, SCRUM e TDD.
          </Description>
        </Academic>
        <Academic
          title="Universidade Estadual da Paraíba"
          icon="/images/uepb.png"
          description="Bacharelado"
          period="2023 - Atualmente"
        >
          <Description className="text-justify">
            Atualmente, estou me graduando em Ciência da Computação, onde estou
            aprendendo novas tecnologias, como: Python, C++, ReactJS,
            PostgreSQL. E sigo me aprimorando na parte do front-end
            desenvolvendo projetos com essas e outras tecnologias que estou
            estudando fora da faculdade, como NextJs, TailwindCSS, entre outras.
          </Description>
        </Academic>
      </section>
    </div>
  )
}
