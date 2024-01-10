import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Sidebar } from '@/components/sidebar'
import { Navbar } from '@/components/sidebar/navbar'
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
          <main className="lg:ml-72 flex-1">
            <section className="m-auto w-full lg:w-[52rem] py-6 lg:py-10 px-4 lg:px-0 space-y-6">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
