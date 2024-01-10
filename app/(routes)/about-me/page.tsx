import { getMostUsedTechs } from '@/data/stacks'
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
      <section>
        <h1 className="text-3xl font-bold">Sobre mim</h1>
        <div className="space-y-3">
          <Info title="Nome">João Vitor</Info>
          <Info title="Idade">{age} anos</Info>
          <Info title="Localização">Paraíba, Brasil</Info>
          <Info title="Especialidade">Desenvolvedor Front-end</Info>
          <Info title="Minha stack principal">
            <div className="flex items-center gap-x-2">
              {techs.map(({ name }) => (
                <p key={name}>{name}</p>
              ))}
            </div>
          </Info>
          <Info title="Idiomas">Inglês (Iniciante), Português (Nativo)</Info>
        </div>
      </section>
    </div>
  )
}
