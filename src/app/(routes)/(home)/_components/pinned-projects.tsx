import { InfoCircledIcon } from '@radix-ui/react-icons'

import { Description } from '@/components/layout/description'
import { Project, ProjectSkeleton } from '@/components/layout/project'
import { getPinnedProjects } from '@/lib/api'

export async function PinnedProjects() {
  const projects = await getPinnedProjects()

  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center gap-x-2 py-6">
        <InfoCircledIcon className="size-4" />
        <Description>Não foi possível carregar os projetos.</Description>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          githubUrl={project.githubUrl}
          imageUrl={project.imageUrl}
          appUrl={project.deployUrl}
        />
      ))}
    </div>
  )
}

export function PinnedProjectsSkeleton() {
  return (
    <div className="space-y-3">
      <ProjectSkeleton />
      <ProjectSkeleton />
    </div>
  )
}
