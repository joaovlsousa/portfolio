import { Metadata } from 'next'

import { Description } from '@/components/layout/description'
import { Tech } from '@/components/layout/tech'
import { Title } from '@/components/layout/title'
import { stacks } from '@/data/stacks'

export const metadata: Metadata = {
  title: 'Tecnologias e Ferramentas',
  description:
    'Explore as tecnologias e ferramentas que impulsionam minha jornada no desenvolvimento.',
}

export default function UsesPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Title>Tecnologias e Ferramentas</Title>
        <Description>
          Explore as tecnologias e ferramentas que impulsionam minha jornada no
          desenvolvimento. Com uma seleção criteriosa e uso detalhado dessas
          ferramentas, crio soluções robustas e eficientes, sempre com foco na
          experiência do usuário.
        </Description>
      </section>

      {stacks.map(({ title, items }) => (
        <section key={title} className="space-y-3">
          <Title>{title}</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {items.map((tech) => (
              <Tech key={tech.name} {...tech} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
