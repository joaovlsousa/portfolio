'use client'

import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { emailLink, githubLink, linkedinLink } from '@/lib/data/links'

export function SocialLinks() {
  const links = [
    {
      label: 'Github',
      href: githubLink,
      icon: GitHubLogoIcon,
    },
    {
      label: 'LinkedIn',
      href: linkedinLink,
      icon: LinkedInLogoIcon,
    },
    {
      label: 'E-mail',
      href: emailLink,
      icon: EnvelopeClosedIcon,
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
            variant="ghost"
            className="w-full hover:bg-sky-700/15 justify-start group"
          >
            <Link href={link.href}>
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
