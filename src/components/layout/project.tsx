import { ArrowTopRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import { Description } from '@/components/layout/description'
import { Title } from '@/components/layout/title'
import { Button } from '@/components/ui/button'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'

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
    <div className="flex flex-col md:flex-row">
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src={imageUrl}
            alt={title}
            width={1280}
            height={720}
            className="w-full md:w-[49%] aspect-video rounded-md border border-primary/15 dark:border-primary/25 cursor-pointer transition-all ease-out duration-300 md:hover:w-1/2"
          />
        </DialogTrigger>
        <DialogContent className="p-0 w-[95vw] md:w-[75vw] max-w-7xl">
          <Image
            src={imageUrl}
            alt={title}
            width={1280}
            height={720}
            className="aspect-video rounded-md"
          />
        </DialogContent>
      </Dialog>

      <div className="w-full md:w-1/2 py-6 md:py-0 md:px-6 grid grid-rows-[40px_1fr_40px]">
        <Title className="border-b">{title}</Title>

        <div className="py-3">
          <Description className="text-justify">{description}</Description>
        </div>

        <div className="flex items-center gap-x-4">
          {appUrl && (
            <Button asChild className="w-1/2">
              <Link href={appUrl}>
                Visitar <ArrowTopRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}
          <Button asChild variant="outline" className="w-1/2">
            <Link href={githubUrl} target="_blank">
              <GitHubLogoIcon className="w-3 h-3 mr-2" />
              Código fonte
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ProjectSkeleton() {
  return (
    <div className="flex flex-col md:flex-row">
      <Skeleton className="w-full md:w-1/2 aspect-video rounded-md" />

      <div className="w-full md:w-1/2 py-6 md:py-0 md:px-6 grid grid-rows-[40px_1fr_40px]">
        <Skeleton className="w-4/5 h-4 rounded-full" />

        <div className="pb-3 space-y-2">
          <Skeleton className="w-full h-3.5 rounded-full" />
          <Skeleton className="w-full h-3.5 rounded-full" />
          <Skeleton className="w-full h-3.5 rounded-full" />
          <Skeleton className="w-4/5 h-3.5 rounded-full" />
        </div>

        <div className="flex items-center gap-x-4">
          <Skeleton className="w-1/2 h-10 rounded-md" />
          <Skeleton className="w-1/2 h-10 rounded-md" />
        </div>
      </div>
    </div>
  )
}
