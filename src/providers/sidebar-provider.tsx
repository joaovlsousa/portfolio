import { PropsWithChildren, useState } from 'react'

import { SidebarContext } from '@/contexts/sidebar-context'

export function SidebarProvider({ children }: PropsWithChildren) {
  const [isOpen, setOpen] = useState<boolean>(false)

  function onOpen() {
    setOpen(true)
  }

  function onClose() {
    setOpen(false)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}
