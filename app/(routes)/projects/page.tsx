import { Metadata } from 'next'
import Link from 'next/link'

import { Description } from '@/components/description'
import { Project } from '@/components/project'
import { Title } from '@/components/title'
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
            title="IFPB"
            description="ifpb"
            githubUrl="/li"
            imageUrl="/images/ifpb.png"
            appUrl="j"
          />
        </div>
      </section>
    </div>
  )
}
