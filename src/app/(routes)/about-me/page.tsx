import { Metadata } from 'next'

import { Description } from '@/components/layout/description'
import { TalkToMeButtons } from '@/components/layout/talk-to-me-buttons'
import { Title } from '@/components/layout/title'
import { Separator } from '@/components/ui/separator'
import { getMostUsedTechs } from '@/data/stacks'

import { Academic } from './_components/academic'
import { Info } from './_components/info'

export const metadata: Metadata = {
  title: 'Sobre mim',
}

function getAge(birthDate: string) {
  return Math.floor((Date.now() - new Date(birthDate).getTime()) / 3.15576e10)
}

export default function AboutMePage() {
  const age = getAge('2005-08-06')
  const techs = getMostUsedTechs().map(({ name }) => {
    return { name }
  })

  return (
    <div className="space-y-6">
      <section className="space-y-6">
        <Title>Sobre mim</Title>
        <div className="space-y-3">
          <Info title="Nome">João Vitor</Info>
          <Info title="Idade">{age} anos</Info>
          <Info title="Localização">Paraíba, Brasil</Info>
          <Info title="Especialidade">Desenvolvedor Front-end</Info>
          <Info title="Minha stack principal">
            <div className="flex items-center gap-x-2 flex-wrap">
              {techs.map(({ name }) => (
                <p key={name}>{name}</p>
              ))}
            </div>
          </Info>
          <Info title="Idiomas">Inglês (Iniciante), Português (Nativo)</Info>
        </div>
      </section>

      <Separator />

      <section>
        <Title>Formação acadêmica</Title>
        <Academic
          title="Instituto Federal da Paraíba"
          description="Ensino Médio + Técnico"
          period="2020 - 2022"
        >
          <Description>
            Tive a oportunidade de fazer o curso de Técnico em Informática
            integrado ao ensino médio, onde na ocasião pude aprender sobre
            diversas tecnologias, como: HTML5, CSS3, MySQL, PHP, JavaScript,
            Java, além de desenvolver diversos projetos utilizando essas
            tecnologias.
          </Description>
        </Academic>
        <Academic
          title="Universidade Estadual da Paraíba"
          description="Bacharelado"
          period="2023 - Atualmente"
        >
          <Description>
            Atualmente, estou me graduando em Ciência da Computação, onde estou
            aprendendo novas tecnologias, como: Python, C++, ReactJS,
            PostgreSQL. E sigo me aprimorando na parte do front-end
            desenvolvendo projetos com essas e outras tecnologias que estou
            estudando fora da faculdade, como NextJs, TailwindCSS, entre outras.
          </Description>
        </Academic>
      </section>

      <Separator />

      <section className="space-y-3">
        <Title>Fale comigo</Title>
        <Description>
          Sinta-se à vontade para entrar em contato comigo através das
          informações de contato fornecidas abaixo. Estou sempre aberto a novas
          oportunidades, colaborações e conversas envolventes sobre o
          emocionante campo da tecnologia e além.
        </Description>
        <TalkToMeButtons />
      </section>
    </div>
  )
}
