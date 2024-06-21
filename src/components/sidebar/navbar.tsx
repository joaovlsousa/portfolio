import { Logo } from '@/components/layout/logo'
import { MobileSidebar } from '@/components/sidebar/mobile-sidebar'
import { ModeToggle } from '@/components/ui/mode-toggle'

export function Navbar() {
  return (
    <header className="lg:hidden h-16 px-4 border-b flex items-center justify-between">
      <MobileSidebar />
      <Logo />
      <ModeToggle />
    </header>
  )
}
