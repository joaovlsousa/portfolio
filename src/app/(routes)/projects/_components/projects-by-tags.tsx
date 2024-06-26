import { InfoCircledIcon } from '@radix-ui/react-icons'

import { Description } from '@/components/layout/description'
import { Project, ProjectSkeleton } from '@/components/layout/project'
import { Title } from '@/components/layout/title'
import { getProjectsByTags } from '@/lib/api'

export async function ProjectsByTags() {
  const { backend, frontend } = await getProjectsByTags()

  if (backend.length === 0 && frontend.length === 0) {
    return (
      <div className="flex items-center justify-center gap-x-2 py-6">
        <InfoCircledIcon className="size-4" />
        <Description> Não foi possível carregar os projetos.</Description>
      </div>
    )
  }

  return (
    <section className="space-y-3">
      <Title>Front end</Title>
      <div className="space-y-3">
        {frontend.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
            appUrl={project.appUrl}
          />
        ))}
      </div>
      <Title>Back end</Title>
      <div className="space-y-3">
        {backend.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
            appUrl={project.appUrl}
          />
        ))}
      </div>
    </section>
  )
}

export function ProjectsByTagsSkeleton() {
  return (
    <section className="space-y-3">
      <ProjectSkeleton />
      <div className="space-y-3">
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
      <ProjectSkeleton />
      <div className="space-y-3">
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
    </section>
  )
}
