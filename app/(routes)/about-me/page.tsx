import { getMostUsedTechs } from '@/data/stacks'

import { TalkToMeButtons } from '@/components/talk-to-me-buttons'
import { Separator } from '@/components/ui/separator'
import { Academic } from './_components/academic'
import { Info } from './_components/info'

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
        <h1 className="text-2xl font-bold">Sobre mim</h1>
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
        <h1 className="text-2xl font-bold">Formação acadêmica</h1>
        <Academic
          title="Instituto Federal da Paraíba"
          description="Ensino Médio + Técnico"
          period="2020 - 2022"
        >
          <p>
            Tive a oportunidade de fazer o curso de Técnico em Informática
            integrado ao ensino médio, onde na ocasião pude aprender sobre
            diversas tecnologias, como: HTML5, CSS3, MySQL, PHP, JavaScript,
            Java, além de desenvolver diversos projetos utilizando essas
            tecnologias.
          </p>
        </Academic>
        <Academic
          title="Universidade Estadual da Paraíba"
          description="Bacharelado"
          period="2023 - Atualmente"
        >
          <p>
            Atualmente, estou me graduando em Ciência da Computação, onde estou
            aprendendo novas tecnologias, como: Python, C++, ReactJS,
            PostgreSQL. E sigo me aprimorando na parte do front-end
            desenvolvendo projetos com essas e outras tecnologias que estou
            estudando fora da faculdade, como NextJs, TailwindCSS, entre outras.
          </p>
        </Academic>
      </section>

      <Separator />

      <section className="space-y-3">
        <h1 className="text-2xl font-bold">Fale comigo</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Sinta-se à vontade para entrar em contato comigo através das
          informações de contato fornecidas abaixo. Estou sempre aberto a novas
          oportunidades, colaborações e conversas envolventes sobre o
          emocionante campo da tecnologia e além.
        </p>
        <TalkToMeButtons />
      </section>
    </div>
  )
}
