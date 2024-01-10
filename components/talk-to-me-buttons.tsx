import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { emailLink, githubLink, linkedinLink } from '@/lib/data/links'

export function TalkToMeButtons() {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
      <Button asChild variant="outline" size="lg">
        <Link href={githubLink}>
          <GitHubLogoIcon className="w-4 h-4 mr-3" />
          <p>Github</p>
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link href={linkedinLink}>
          <LinkedInLogoIcon className="w-4 h-4 mr-3 text-sky-600" />
          <p>LinkedIn</p>
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link href={emailLink}>
          <EnvelopeClosedIcon className="w-4 h-4 mr-3 text-orange-600" />
          <p>E-mail</p>
        </Link>
      </Button>
    </div>
  )
}
