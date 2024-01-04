import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Vitor - Desenvolvedor Front-end',
  description:
    'João Vitor: Desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Explore meu portfólio e descubra como minhas habilidades em programação podem impulsionar seu projeto. Descubra meu trabalho e entre em contato para colaborações ou oportunidades profissionais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <Sidebar />
          <main className="md:ml-72 flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
