import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { MobileSidebar } from './mobile sidebar'

export function Navbar() {
  return (
    <header className="md:hidden h-16 px-4 border-b flex items-center justify-between">
      <MobileSidebar />
      <Logo />
      <ModeToggle />
    </header>
  )
}
