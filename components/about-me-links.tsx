'use client'

import {
  ClipboardIcon,
  DesktopIcon,
  HomeIcon,
  LayersIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export function AboutMeLinks() {
  const pathname = usePathname()

  const links = [
    {
      label: 'Sobre mim',
      href: '/about-me',
      icon: ClipboardIcon,
    },
    {
      label: 'Projetos',
      href: '/projects',
      icon: LayersIcon,
    },
    {
      label: 'Tecnologias e Ferramentas',
      href: '/uses',
      icon: DesktopIcon,
    },
  ]

  return (
    <div className="space-y-3">
      <Button
        asChild
        variant="ghost"
        className={cn(
          'w-full hover:bg-sky-700/15 justify-start',
          pathname === '/' && 'bg-sky-700/15',
        )}
      >
        <Link href="/">
          <HomeIcon
            className={cn(
              'w-4 h-4 mr-2 group-hover:text-sky-500',
              pathname === '/' && 'text-sky-500',
            )}
          />
          <p>Início</p>
        </Link>
      </Button>
      <div className="space-y-2">
        <h2 className="text-xs text-muted-foreground font-semibold pl-1">Eu</h2>
        <div className="space-y-1">
          {links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className={cn(
                'w-full hover:bg-sky-700/15 justify-start group',
                pathname === link.href && 'bg-sky-700/15',
              )}
            >
              <Link href={link.href}>
                <link.icon
                  className={cn(
                    'w-4 h-4 mr-2 group-hover:text-sky-500',
                    pathname === link.href && 'text-sky-500',
                  )}
                />
                <p>{link.label}</p>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
