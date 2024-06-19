'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useSidebar } from '@/hooks/use-sidebar'

export function MobileSidebar() {
  const { isOpen, onOpen, onClose } = useSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={onOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <HamburgerMenuIcon className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" onClose={onClose}>
        <Sidebar isMobile />
      </SheetContent>
    </Sheet>
  )
}
