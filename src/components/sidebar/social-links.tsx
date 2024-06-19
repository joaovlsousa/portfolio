'use client'

import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { emailLink, githubLink, linkedinLink } from '@/data/links'
import { useSidebar } from '@/hooks/use-sidebar'

export function SocialLinks() {
  const { onClose } = useSidebar()

  const links = [
    {
      label: 'Github',
      href: githubLink,
      icon: GitHubLogoIcon,
      onClick: () => onClose(),
    },
    {
      label: 'LinkedIn',
      href: linkedinLink,
      icon: LinkedInLogoIcon,
      onClick: () => onClose(),
    },
    {
      label: 'E-mail',
      href: emailLink,
      icon: EnvelopeClosedIcon,
      onClick: () => onClose(),
    },
  ]

  return (
    <div className="mt-6 space-y-2">
      <h2 className="text-xs text-muted-foreground font-semibold pl-1">
        Redes sociais
      </h2>
      <div className="space-y-1">
        {links.map((link) => (
          <Button
            key={link.href}
            asChild
            onClick={link.onClick}
            variant="ghost"
            className="w-full hover:bg-sky-700/15 justify-start group"
          >
            <Link href={link.href} target="_blank">
              <link.icon className="w-4 h-4 mr-2 group-hover:text-sky-500" />
              <p>{link.label}</p>
              <ArrowTopRightIcon className="w-3 h-3 ml-auto text-sky-500" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
