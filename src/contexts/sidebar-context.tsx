import { createContext } from 'react'

interface SidebarContextProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps,
)
