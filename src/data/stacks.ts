import { TechProps } from '@/components/layout/tech'

export interface Stack {
  title: string
  items: {
    name: string
    icon: string
    invert?: boolean
    mostUsed?: boolean
  }[]
}

export const stacks: Stack[] = [
  {
    title: 'Front-end',
    items: [
      {
        name: 'CSS',
        icon: '/techs/css.svg',
      },
      {
        name: 'HTML',
        icon: '/techs/html.svg',
      },
      {
        name: 'JavaScript',
        icon: '/techs/javascript.svg',
      },
      {
        name: 'Next.js',
        icon: '/techs/nextjs.svg',
        invert: true,
        mostUsed: true,
      },
      {
        name: 'Radix',
        icon: '/techs/radix.svg',
        invert: true,
      },
      {
        name: 'React.js',
        icon: '/techs/react.svg',
        mostUsed: true,
      },
      {
        name: 'Typescript',
        icon: '/techs/typescript.svg',
        mostUsed: true,
      },
      {
        name: 'TailwindCSS',
        icon: '/techs/tailwindcss.svg',
        mostUsed: true,
      },
      {
        name: 'Vite',
        icon: '/techs/vite.svg',
      },
    ],
  },
  {
    title: 'Back-end',
    items: [
      {
        name: 'Express',
        icon: '/techs/express.svg',
      },
      {
        name: 'Fastify',
        icon: '/techs/fastify.svg',
        invert: true,
        mostUsed: true,
      },
      {
        name: 'Nest.js',
        icon: '/techs/nest.svg',
        mostUsed: true,
      },
      {
        name: 'Java',
        icon: '/techs/java.svg',
      },
      {
        name: 'Node',
        icon: '/techs/nodejs.svg',
      },
      {
        name: 'Typescript',
        icon: '/techs/typescript.svg',
      },
      {
        name: 'Prisma',
        icon: '/techs/prisma.svg',
        invert: true,
      },
    ],
  },
  {
    title: 'Database',
    items: [
      {
        name: 'MySQL',
        icon: '/techs/mysql.svg',
      },
      {
        name: 'PostgreSQL',
        icon: '/techs/postgresql.svg',
        mostUsed: true,
      },
      {
        name: 'Docker',
        icon: '/techs/docker.svg',
        mostUsed: true,
      },
    ],
  },
  {
    title: 'Design',
    items: [
      {
        name: 'Figma',
        icon: '/techs/figma.svg',
      },
    ],
  },
  {
    title: 'Infraestrutura',
    items: [
      {
        name: 'Vercel',
        icon: '/techs/vercel.svg',
        invert: true,
      },
      {
        name: 'Supabase',
        icon: '/techs/supabase.svg',
      },
    ],
  },
  {
    title: 'Controle de versão',
    items: [
      {
        name: 'Git',
        icon: '/techs/git.svg',
      },
      {
        name: 'Github',
        icon: '/techs/github.svg',
        invert: true,
      },
    ],
  },
]

export function getMostUsedTechs(): TechProps[] {
  const mostUsedTechs: TechProps[] = []

  stacks.forEach(({ items }) => {
    const techs = items.filter(({ mostUsed }) => mostUsed === true)
    mostUsedTechs.push(...techs)
  })

  return mostUsedTechs
}
