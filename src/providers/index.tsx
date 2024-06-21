'use client'

import { PropsWithChildren } from 'react'

import { SidebarProvider } from './sidebar-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  )
}
