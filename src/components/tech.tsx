import { CodeIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export interface TechProps {
  name: string
  icon: string
  invert?: boolean
  mostUsed?: boolean
}

export function Tech({ name, icon, invert, mostUsed }: TechProps) {
  return (
    <div className="relative flex items-center gap-3 rounded-md p-3 bg-sky-700/15 hover:bg-sky-700/35 dark:hover:bg-sky-400/15 text-accent-foreground transition-colors">
      {mostUsed && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CodeIcon className="w-4 h-4 absolute top-0 left-0 p-0.5 rounded-full bg-sky-500 dark:bg-sky-700" />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tecnologia que uso com frequência</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <div
        className={cn(
          'p-2 flex items-center justify-center rounded-lg relative overflow-hidden',
          invert && 'dark:invert',
        )}
      >
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className="z-10"
          loading="lazy"
        />
        <Image
          src={icon}
          alt=""
          width={8}
          height={8}
          className="blur-lg absolute inset-0 w-[125%] h-[125%] opacity-80 z-0"
        />
      </div>
      <span className="text-xs md:text-sm">{name}</span>
    </div>
  )
}
