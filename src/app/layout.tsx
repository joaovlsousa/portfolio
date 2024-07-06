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
  title: 'João Vitor - Desenvolvedor Full Stack',
  description:
    'Olá! me chamo João Vitor, sou um desenvolvedor web especializado em TypeScript e Node.js, com forte expertise em criar sistemas corporativos escaláveis, interfaces envolventes e aplicativos sofisticados. Minha experiência abrange o uso de frameworks como React.js, Next.js, Nest.js e Fastify, proporcionando soluções integradas e eficientes. Além disso, possuo sólido conhecimento em gestão e manipulação de bancos de dados, incluindo MySQL e PostgreSQL, garantindo que suas aplicações sejam robustas e bem estruturadas. Estou comprometido em entregar projetos que não apenas atendam, mas superem suas expectativas.',
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
