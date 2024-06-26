import { Metadata } from 'next'
import { Suspense } from 'react'

import { Description } from '@/components/layout/description'
import { Title } from '@/components/layout/title'

import {
  ProjectsByTags,
  ProjectsByTagsSkeleton,
} from './_components/projects-by-tags'

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
      <Suspense fallback={<ProjectsByTagsSkeleton />}>
        <ProjectsByTags />
      </Suspense>
    </div>
  )
}
