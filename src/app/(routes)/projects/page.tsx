import { Metadata } from 'next'
import Link from 'next/link'

import { Description } from '@/components/layout/description'
import { Title } from '@/components/layout/title'
import { Project } from '@/components/project'
import { githubLink } from '@/lib/data/links'

export const metadata: Metadata = {
  title: 'Meus projetos',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Title>Meus projetos</Title>
        <Description>
          Aqui estão alguns de meus projetos que desenvolvi, você pode encontra
          mais em meu{' '}
          <Link href={githubLink} className="text-sky-500 underline">
            Github
          </Link>
          .
        </Description>
      </section>
      <section className="space-y-3">
        <Title>Front-end</Title>
        <div className="space-y-8">
          <Project
            title="Supportify"
            description="Um site que tem como objetivo gerenciar os atendimentos de um usuário ou empresa. Você pode cadastrar tanto clientes quanto atendimentos referentes aos seus clientes."
            githubUrl="https://github.com/joaovlsousa/supportify"
            imageUrl="/projects/support-management.png"
          />
        </div>
      </section>
    </div>
  )
}
