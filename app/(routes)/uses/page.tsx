import { Tech } from '@/components/tech'
import { stacks } from '@/data/stacks'

export default function UsesPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h1 className="text-2xl font-bold">Tecnologias e Ferramentas</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Explore as tecnologias e ferramentas que impulsionam a minha
          experiência em desenvolvimento. Eu seleciono e uso detalhadamente
          essas ferramentas para criar soluções robustas e eficientes,
          priorizando sempre a experiência do usuário.
        </p>
      </section>

      {stacks.map(({ title, items }) => (
        <section key={title} className="space-y-3">
          <h1 className="text-2xl font-bold">{title}</h1>
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
