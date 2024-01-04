import { AboutMeLinks } from '@/components/about-me-links'
import { Logo } from '@/components/logo'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { SocialLinks } from './social-links'

interface SidebarProps {
  isMobile?: boolean
}

export function Sidebar({ isMobile }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col',
        !isMobile &&
          'hidden md:flex fixed top-0 left-0 w-72 h-full p-4 border-r',
      )}
    >
      <div className="flex items-center gap-x-4">
        <Logo />
        <p className="text-xs text-sky-500 pt-1">
          &copy; {new Date().getFullYear()}
        </p>
      </div>

      <Separator className="my-3" />
      <AboutMeLinks />
      <SocialLinks />
    </aside>
  )
}
