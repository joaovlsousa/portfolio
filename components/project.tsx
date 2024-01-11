import { ArrowTopRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import { Description } from '@/components/description'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'

interface ProjectProps {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  appUrl?: string
}

export function Project({
  description,
  githubUrl,
  imageUrl,
  title,
  appUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center md:justify-between">
      <Image
        src={imageUrl}
        alt={title}
        width={1280}
        height={720}
        className="w-full md:w-1/2 aspect-video rounded-md"
      />
      <div className="w-full md:w-1/2 flex flex-col md:items-end gap-y-3">
        <Title>{title}</Title>
        <Description>{description}</Description>

        <div className="flex items-center gap-x-4">
          {appUrl && (
            <Button asChild>
              <Link href={appUrl}>
                Visitar <ArrowTopRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href={githubUrl}>
              <GitHubLogoIcon className="w-3 h-3 mr-2" />
              Ver código
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
