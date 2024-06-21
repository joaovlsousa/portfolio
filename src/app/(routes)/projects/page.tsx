import { Metadata } from 'next'

import { Description } from '@/components/layout/description'
import { Title } from '@/components/layout/title'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Explore meus projetos e veja como transformo ideias em soluções inovadoras.',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Title>Projetos</Title>
        <Description>
          Explore meus projetos e veja como transformo ideias em soluções
          inovadoras. Cada projeto é cuidadosamente elaborado para ser robusto e
          eficiente, sempre com um compromisso inabalável com a experiência do
          usuário.
        </Description>
      </section>
      <section className="space-y-3">
        <Title>Front-end</Title>
        <div className="space-y-3"></div>
      </section>
    </div>
  )
}
