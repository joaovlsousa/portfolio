import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { emailLink, githubLink, linkedinLink, whatsappLink } from '@/data/links'

import { Description } from './description'
import { Title } from './title'

export function TalkToMe() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-x-3">
        <RocketIcon className="size-6 text-sky-500" />
        <Title>Fale comigo</Title>
      </div>

      <Description>
        Sinta-se à vontade para entrar em contato comigo através das informações
        de contato fornecidas abaixo. Estou sempre aberto a novas oportunidades,
        colaborações e conversas sobre o campo da tecnologia e além.
      </Description>

      <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
        <Button asChild variant="outline" size="lg">
          <Link href={whatsappLink} target="_blank">
            <Image
              src="/images/whatsapp.png"
              alt="whatsapp"
              width={16}
              height={16}
              className="size-4 mr-3 dark:invert"
            />
            <p>Whatsapp</p>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={linkedinLink} target="_blank">
            <LinkedInLogoIcon className="size-4 mr-3" />
            <p>LinkedIn</p>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={emailLink} target="_blank">
            <EnvelopeClosedIcon className="size-4 mr-3" />
            <p>E-mail</p>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={githubLink} target="_blank">
            <GitHubLogoIcon className="size-4 mr-3" />
            <p>Github</p>
          </Link>
        </Button>
      </div>
    </section>
  )
}
