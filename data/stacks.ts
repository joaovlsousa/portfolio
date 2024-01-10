import { TechProps } from '@/components/tech'

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
    title: 'frontend',
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
        name: 'NextJS',
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
        name: 'React',
        icon: '/techs/react.svg',
        mostUsed: true,
      },
      {
        name: 'TailwindCSS',
        icon: '/techs/tailwindcss.svg',
        mostUsed: true,
      },
      {
        name: 'Typescript',
        icon: '/techs/typescript.svg',
        mostUsed: true,
      },
      {
        name: 'Vite',
        icon: '/techs/vite.svg',
      },
    ],
  },
  {
    title: 'design',
    items: [
      {
        name: 'Figma',
        icon: '/techs/figma.svg',
      },
    ],
  },
  {
    title: 'backend',
    items: [
      {
        name: 'Express',
        icon: '/techs/express.svg',
        mostUsed: true,
      },
      {
        name: 'Fastify',
        icon: '/techs/fastify.svg',
        invert: true,
        mostUsed: true,
      },
      {
        name: 'Java',
        icon: '/techs/java.svg',
      },
      {
        name: 'JavaScript',
        icon: '/techs/javascript.svg',
      },
      {
        name: 'Node',
        icon: '/techs/nodejs.svg',
      },
      {
        name: 'Prisma',
        icon: '/techs/prisma.svg',
        invert: true,
        mostUsed: true,
      },
      {
        name: 'Typescript',
        icon: '/techs/typescript.svg',
      },
    ],
  },
  {
    title: 'database',
    items: [
      {
        name: 'MySQL',
        icon: '/techs/mysql.svg',
        mostUsed: true,
      },
      {
        name: 'PostgreSQL',
        icon: '/techs/postgresql.svg',
      },
    ],
  },
  {
    title: 'infrastructure',
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
    title: 'version-control',
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
  {
    title: 'extensions',
    items: [
      {
        name: 'ESLint',
        icon: '/techs/eslint.svg',
      },
      {
        name: 'Prettier',
        icon: '/techs/prettier.svg',
      },
      {
        name: 'Live server',
        icon: '/techs/live-server.svg',
      },
    ],
  },
  {
    title: 'apps',
    items: [
      {
        name: 'Discord',
        icon: '/techs/discord.svg',
      },
      {
        name: 'Firefox',
        icon: '/techs/firefox.svg',
      },
      {
        name: 'Visual Studio Code',
        icon: '/techs/vscode.svg',
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
