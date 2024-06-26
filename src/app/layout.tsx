import './globals.css'

import type { Metadata } from 'next'

import { TalkToMe } from '@/components/layout/talk-to-me'
import { Sidebar } from '@/components/sidebar'
import { Navbar } from '@/components/sidebar/navbar'
import { Separator } from '@/components/ui/separator'
import { poppins } from '@/fonts'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers'

export const metadata: Metadata = {
  title: 'João Vitor - Desenvolvedor Front-end',
  description:
    'João Vitor: Desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Explore meu portfólio e descubra como minhas habilidades em programação podem impulsionar seu projeto. Descubra meu trabalho e entre em contato para colaborações ou oportunidades profissionais.',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg',
      url: '/logo-dark.svg',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/svg',
      url: '/logo-ligth.svg',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn('antialiased scroll-smooth', poppins.className)}>
        <Providers>
          <Navbar />
          <Sidebar />
          <main className="lg:ml-72 flex-1">
            <section className="m-auto w-full lg:w-[52rem] py-6 lg:py-10 px-4 lg:px-0 space-y-6">
              {children}

              <Separator />

              <TalkToMe />
            </section>
          </main>
        </Providers>
      </body>
    </html>
  )
}
